import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    margin: 50,
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  lobbyCodeCenter: {
    justifyContent: "center",
    alignItems: "center",
  },
  lobbyCodeTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  lobbyCodeRow: {
    flexDirection: 'row',
  },
  lobbyCodeInput: {
    borderWidth: 1,
    padding: 8,
    paddingInline: 100,
  },
  gamesSettingsContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 50,
    borderColor: "black",
    borderWidth: 1,
    maxHeight: 200,
  },
  gamesSettingsScrollView: {
    width: '100%',
  },
  gamesSettingsTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  gamesSettingsInput: {
    borderWidth: 1,
    padding: 8,
    paddingInline: 100,
    margin: 10,
  },
  playerListContainer: {
    borderColor: "black",
    borderWidth: 1,
    maxHeight: 200,
  },
  playerListScrollView: {
    width: '100%',
  },
  playerListTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  playerListInput: {
    borderWidth: 1,
    padding: 8,
    paddingInline: 100,
    margin: 10,
  },
});
