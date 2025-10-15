import { ScrollView, Text, TextInput, View } from "react-native";
import { styles } from './styles/lobbyScreen.styles';

export default function LobbyScreen() {
    return (
        <View style={styles.container}>
        <Title></Title>
        <PlayerList></PlayerList>
        </View>
    )
}

export function Title() {
  return (
    <View
    style={styles.titleContainer}>

      <Text style={styles.titleText}> Lobby scherm</Text>

    </View>
  );
}

export function PlayerList() {
    return(
        <View style={styles.playerListContainer}>
            <ScrollView style={styles.playerListScrollView}>
                <Text style={styles.playerListTitle}>
                        Players</Text>
                <TextInput
                    editable={false}
                    value="Player 1"
                    style={styles.playerListInput}
                />
                <TextInput
                    editable={false}
                    value="Player 2"
                    style={styles.playerListInput}
                />
                <TextInput
                    editable={false}
                    value="Player 3"
                    style={styles.playerListInput}
                />
                <TextInput
                    editable={false}
                    value="Player 4"
                    style={styles.playerListInput}
                />
                <TextInput
                    editable={false}
                    value="Player 5"
                    style={styles.playerListInput}
                />
            </ScrollView>
        </View>
    )
}