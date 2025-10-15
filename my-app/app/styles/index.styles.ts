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
  joinLobbyContainer: {
    margin: 50,
  },
  joinLobbyTitle: {
    fontWeight: 'bold',
  },
  joinLobbyInputRow: {
    flexDirection: 'row',
  },
  joinLobbyInput: {
    borderWidth: 1,
    padding: 8,
  },
  hostGameTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
