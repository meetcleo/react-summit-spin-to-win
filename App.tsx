import React, { useRef } from "react";
import {
  Animated,
  Button,
  Image,
  PanResponder,
  StyleSheet,
  Text,
  View,
} from "react-native";

import arrow from "./assets/arrow.png";
import spinner from "./assets/spinner.png";

export default function App() {
  const rotateValue = useRef(new Animated.Value(0)).current;

  const reset = () => {
    Animated.spring(rotateValue, { toValue: 0, useNativeDriver: true }).start();
  };

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gestureState) => {
      rotateValue.setValue(gestureState.dy);
    },
  });

  const rotationStyle = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "1deg"],
  });

  return (
    <View style={styles.container}>
      <Text style={styles.header}>SPIN TO WIN</Text>
      <Image source={arrow} style={styles.arrow} />
      <Animated.Image
        source={spinner}
        style={[styles.spinner, { transform: [{ rotate: rotationStyle }] }]}
        {...panResponder.panHandlers}
      />
      <Button title={"Reset"} onPress={reset} />
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
