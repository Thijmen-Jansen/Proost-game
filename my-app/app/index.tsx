import { Text, View } from "react-native";
import { TextInput } from 'react-native';
import { Button } from 'react-native';
import { Switch } from 'react-native';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
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
    style={{
      margin: 50,
    }}>

      <Text style={{
        fontSize: 30,
        fontWeight: 'bold',
      }}> Proost🍻</Text>

    </View>
  )
}

export function JoinLobby(){
  return(
    <View
    style={{
      margin: 50
    }}>
      <Text
      style={{
        fontWeight: 'bold',
      }}>
        Join lobby</Text>
      <View
      style={{
        flexDirection: 'row',
      }}>
        <TextInput
          placeholder="Typ hier de code (bv. 662011)"
          style={{ borderWidth: 1, padding: 8 }}
        />
        <Button title="Join" onPress={() => alert('Je hebt geklikt!')} />
      </View>
    </View>
  )
}

export function HostGame(){
  return (
    <View>
    <Text
    style={{
      fontWeight: 'bold',
      fontSize: 20
    }}>
      Host Game</Text>
    <Button title="Host Game" onPress={() => alert('Je hebt geklikt!')} />
    </View>
  )
}