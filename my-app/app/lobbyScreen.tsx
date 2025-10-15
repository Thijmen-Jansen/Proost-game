import { ScrollView, Text, TextInput, View } from "react-native";

export default function LobbyScreen() {
    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        }}>
        <Title></Title>
        <PlayerList></PlayerList>
        </View>
    )
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
      }}> Lobby scherm</Text>

    </View>
  );
}

export function PlayerList() {
    return(
        <View style={{
            borderColor: "black",
            borderWidth: 1,
            maxHeight: 200,
        }}>
            <ScrollView style={{ width: '100%' }}>
                <Text style={{
                        fontSize: 15,
                        fontWeight: 'bold',
                    }}>
                        Players</Text>
                <TextInput
                    editable={false}
                    value="Player 1"
                    style={{ borderWidth: 1, padding: 8, paddingInline: 100, margin: 10 }}
                />
                <TextInput
                    editable={false}
                    value="Player 2"
                    style={{ borderWidth: 1, padding: 8, paddingInline: 100, margin: 10 }}
                />
                <TextInput
                    editable={false}
                    value="Player 3"
                    style={{ borderWidth: 1, padding: 8, paddingInline: 100, margin: 10 }}
                />
                <TextInput
                    editable={false}
                    value="Player 4"
                    style={{ borderWidth: 1, padding: 8, paddingInline: 100, margin: 10 }}
                />
                <TextInput
                    editable={false}
                    value="Player 5"
                    style={{ borderWidth: 1, padding: 8, paddingInline: 100, margin: 10 }}
                />
            </ScrollView>
        </View>
    )
}