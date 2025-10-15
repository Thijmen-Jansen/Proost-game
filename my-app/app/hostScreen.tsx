import { Text, View, ScrollView } from "react-native";
import { TextInput } from 'react-native';
import { Button } from 'react-native';
import { styles } from './styles/hostScreen.styles';

export default function HostScreen(){
    return(
        <View
            style={styles.container}>
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
    style={styles.titleContainer}>

      <Text style={styles.titleText}> Proost🍻</Text>

    </View>
  );
}

export function ShowLobbyCode() {
    return(
        <View>
            <View style={styles.lobbyCodeCenter}>
                <Text style={styles.lobbyCodeTitle}>
                    De lobby code</Text>
            </View>
            <View style={styles.lobbyCodeRow}>
                <TextInput
                    value="278194"
                    editable={false}
                    style={styles.lobbyCodeInput}
                />
                <Button title="Share"></Button>
            </View>
        </View>
    )
}

export function ShowGamesSetittings() {
    return(
        <View style={styles.gamesSettingsContainer}>
            <ScrollView style={styles.gamesSettingsScrollView}>
                <Text style={styles.gamesSettingsTitle}>
                        Games</Text>
                <TextInput
                    editable={false}
                    style={styles.gamesSettingsInput}
                />
                <TextInput
                    editable={false}
                    style={styles.gamesSettingsInput}
                />
                <TextInput
                    editable={false}
                    style={styles.gamesSettingsInput}
                />
                <TextInput
                    editable={false}
                    style={styles.gamesSettingsInput}
                />
                <TextInput
                    editable={false}
                    style={styles.gamesSettingsInput}
                />
            </ScrollView>
        </View>
    )
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