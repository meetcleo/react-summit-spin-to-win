import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import arrow from "./assets/arrow.png";
import spinner from "./assets/spinner.png";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>SPIN TO WIN</Text>
      <Image source={arrow} style={styles.arrow} />
      <Image source={spinner} style={styles.spinner} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    color: "#fff",
    fontSize: 94,
    textAlign: "center",
    fontWeight: "bold",
    letterSpacing: -4,
    textShadowColor: "#fff",
    textShadowRadius: 6,
  },
  arrow: {
    width: 52,
    height: 52,
  },
  spinner: {
    width: 440,
    height: 440,
  },
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
