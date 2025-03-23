// components/ScanButton.js
import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ScanButton = (props) => {
  return (
    <View style={styles.scanButtonContainer}>
      <TouchableOpacity {...props} activeOpacity={0.7} style={styles.scanButton}>
        <MaterialCommunityIcons name="line-scan" size={25} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  scanButtonContainer: {
    position: "absolute",
    bottom: 2,
    width: 80,
    height: 40,
    borderRadius: 6,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  scanButton: {
    width: 35,
    height: 30,
    borderRadius: 6,
    backgroundColor: "#f6962f",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ScanButton;
