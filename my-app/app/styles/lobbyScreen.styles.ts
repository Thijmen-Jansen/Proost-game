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
