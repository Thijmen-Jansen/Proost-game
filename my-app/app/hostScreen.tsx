import { Text, View, ScrollView } from "react-native";
import { TextInput } from 'react-native';
import { Button } from 'react-native';

export default function HostScreen(){
    return(
        <View
            style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        }}>
            <Title></Title>
            <ShowLobbyCode></ShowLobbyCode>
            <ShowGamesSetittings></ShowGamesSetittings>
            <PlayerList></PlayerList>
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
  );
}

export function ShowLobbyCode() {
    return(
        <View>
            <View style={{
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Text style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                }}>
                    De lobby code</Text>
            </View>
            <View style={{
                flexDirection: 'row'
            }}>
                <TextInput
                    value="278194"
                    editable={false}
                    style={{ borderWidth: 1, padding: 8, paddingInline: 100 }}
                />
                <Button title="Share"></Button>
            </View>
        </View>
    )
}

export function ShowGamesSetittings() {
    return(
        <View style={{
            justifyContent: "center",
            alignItems: "center",
            margin: 50,
            borderColor: "black",
            borderWidth: 1,
            maxHeight: 200,
        }}>
            <ScrollView style={{ width: '100%' }}>
                <Text style={{
                        fontSize: 15,
                        fontWeight: 'bold',
                    }}>
                        Games</Text>
                <TextInput
                    editable={false}
                    style={{ borderWidth: 1, padding: 8, paddingInline: 100, margin: 10 }}
                />
                <TextInput
                    editable={false}
                    style={{ borderWidth: 1, padding: 8, paddingInline: 100, margin: 10 }}
                />
                <TextInput
                    editable={false}
                    style={{ borderWidth: 1, padding: 8, paddingInline: 100, margin: 10 }}
                />
                <TextInput
                    editable={false}
                    style={{ borderWidth: 1, padding: 8, paddingInline: 100, margin: 10 }}
                />
                <TextInput
                    editable={false}
                    style={{ borderWidth: 1, padding: 8, paddingInline: 100, margin: 10 }}
                />
            </ScrollView>
        </View>
    )
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