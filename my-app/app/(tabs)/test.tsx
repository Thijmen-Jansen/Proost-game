import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function HomeScreen({ navigation }: { navigation?: any }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welkom op de Homepagina!</Text>
      <Text style={styles.subtitle}>Dit is een basic voorbeeld van een HomeScreen.</Text>
      {/* Navigatie voorbeeld: alleen als je navigation prop hebt (klassieke navigatie) */}
      {navigation && (
        <Button
          title="Ga naar Details"
          onPress={() => navigation.navigate('Details')}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 24,
    textAlign: "center",
  },
});