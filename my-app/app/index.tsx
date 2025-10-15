import { navigate } from "expo-router/build/global-state/routing";
import { Text, View } from "react-native";
import { TextInput } from 'react-native';
import { Button } from 'react-native';
import { Switch } from 'react-native';
import { styles } from './styles/index.styles';

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Title></Title>
      <JoinLobby></JoinLobby>
      <HostGame></HostGame>

    </View>
  );
}

export function Title() {
  return (
    <View
    style={styles.titleContainer}>

      <Text style={styles.titleText}> Proost🍻</Text>

    </View>
  )
}

export function JoinLobby(){
  return(
    <View
    style={styles.joinLobbyContainer}>
      <Text
      style={styles.joinLobbyTitle}>
        Join lobby</Text>
      <View
      style={styles.joinLobbyInputRow}>
        <TextInput
          placeholder="Typ hier de code (bv. 662011)"
          style={styles.joinLobbyInput}
        />
        <Button title="Join" onPress={() => navigate('/lobbyScreen')} />
      </View>
    </View>
  )
}

export function HostGame(){
  return (
    <View>
    <Text
    style={styles.hostGameTitle}>
      Host Game</Text>
    <Button title="Host Game" onPress={() => navigate('/hostScreen')} />
    </View>
  )
}