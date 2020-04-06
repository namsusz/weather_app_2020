import React, { version } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Loading() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>날씨를 불러오고 있어요! (´ε｀ ʃƪ)♡</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 150,
    backgroundColor: "#BBDEFB",
  },
  text: {
    color: "#212121",
    fontSize: 25,
  },
});
