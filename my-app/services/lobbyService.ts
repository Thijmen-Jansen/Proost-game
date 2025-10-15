// Service voor lobby en game operaties met Firebase
import { database } from '../config/firebase';
import { ref, set, get, onValue, push, update, remove } from 'firebase/database';

// Types
export interface Player {
  id: string;
  name: string;
}

export interface Lobby {
  code: string;
  host: string;
  players: { [key: string]: Player };
  status: 'waiting' | 'playing' | 'finished';
}

export interface Game {
  lobbyId: string;
  currentRound: number;
  players: { [key: string]: Player };
}

// Lobby functies
export const lobbyService = {
  // Maak een nieuwe lobby
  createLobby: async (hostName: string): Promise<string> => {
    const lobbyRef = push(ref(database, 'lobbies'));
    const lobbyId = lobbyRef.key!;
    const code = generateLobbyCode();
    
    const newLobby: Lobby = {
      code,
      host: hostName,
      players: {
        [hostName]: { id: hostName, name: hostName }
      },
      status: 'waiting'
    };
    
    await set(lobbyRef, newLobby);
    return code;
  },

  // Join een lobby met code
  joinLobby: async (code: string, playerName: string): Promise<string | null> => {
    const lobbiesRef = ref(database, 'lobbies');
    const snapshot = await get(lobbiesRef);
    
    if (snapshot.exists()) {
      const lobbies = snapshot.val();
      const lobbyId = Object.keys(lobbies).find(
        key => lobbies[key].code === code
      );
      
      if (lobbyId) {
        const playerRef = ref(database, `lobbies/${lobbyId}/players/${playerName}`);
        await set(playerRef, { id: playerName, name: playerName });
        return lobbyId;
      }
    }
    return null;
  },

  // Luister naar lobby updates
  onLobbyUpdate: (lobbyId: string, callback: (lobby: Lobby) => void) => {
    const lobbyRef = ref(database, `lobbies/${lobbyId}`);
    return onValue(lobbyRef, (snapshot) => {
      if (snapshot.exists()) {
        callback(snapshot.val());
      }
    });
  },

  // Update lobby status
  updateLobbyStatus: async (lobbyId: string, status: 'waiting' | 'playing' | 'finished') => {
    const statusRef = ref(database, `lobbies/${lobbyId}/status`);
    await set(statusRef, status);
  },

  // Verwijder een speler uit lobby
  removePlayer: async (lobbyId: string, playerId: string) => {
    const playerRef = ref(database, `lobbies/${lobbyId}/players/${playerId}`);
    await remove(playerRef);
  },

  // Verwijder een lobby
  deleteLobby: async (lobbyId: string) => {
    const lobbyRef = ref(database, `lobbies/${lobbyId}`);
    await remove(lobbyRef);
  }
};

// Game functies
export const gameService = {
  // Start een nieuw spel
  createGame: async (lobbyId: string, players: { [key: string]: Player }): Promise<string> => {
    const gameRef = push(ref(database, 'games'));
    const gameId = gameRef.key!;
    
    const newGame: Game = {
      lobbyId,
      currentRound: 1,
      players
    };
    
    await set(gameRef, newGame);
    return gameId;
  },

  // Luister naar game updates
  onGameUpdate: (gameId: string, callback: (game: Game) => void) => {
    const gameRef = ref(database, `games/${gameId}`);
    return onValue(gameRef, (snapshot) => {
      if (snapshot.exists()) {
        callback(snapshot.val());
      }
    });
  },

  // Update huidige ronde
  updateRound: async (gameId: string, round: number) => {
    const roundRef = ref(database, `games/${gameId}/currentRound`);
    await set(roundRef, round);
  }
};

// Hulpfunctie om lobby code te genereren
function generateLobbyCode(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}
