import React from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { Button } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const BalanceBubbles = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hello, beautiful! Pisal KAM</Text>
      <View style={styles.infoContainer}>
        <TouchableOpacity style={styles.section} onPress={() => {}} activeOpacity={0.7}>
          <View style={styles.labelRow}>
            <Text style={styles.label}>BALANCE</Text>
            <MaterialCommunityIcons name="chevron-right" size={16} color="gray" />
          </View>
          <Text style={styles.value}>$0.2</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity style={styles.section} onPress={() => {}} activeOpacity={0.7}>
          <View style={styles.labelRow}>
            <Text style={styles.label}>BUBBLES</Text>
            <MaterialCommunityIcons name="chevron-right" size={16} color="gray" />
          </View>
          <Text style={styles.value}>0.5 <MaterialCommunityIcons name="chart-bubble" size={16} color="black"/></Text>
        </TouchableOpacity>
        <View style={styles.labelRow}>
        <Button mode="text" style={styles.topUpButton} onPress={() => {}} labelStyle={styles.buttonLabel}>
        Top Up
        <MaterialCommunityIcons name="lightning-bolt-outline" size={12} color="white" />
      </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#fff",
  },
  greeting: {
    fontSize: 18,
    fontWeight: "w400",
    marginBottom: 12,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  section: {
    alignItems: "flex-start",
    flex: 1,
  },
  labelRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    fontSize: 12,
    color: "gray",
  },
  value: {
    fontSize: 18,
    fontWeight: "w400",
  },
  divider: {
    width: 1,
    backgroundColor: "gray",
    height: 40,
    marginLeft: -70,
    marginHorizontal:25,
  },
  topUpButton: {
    width:75,
    backgroundColor: "#f6962f",
    borderRadius: 16,
    height: 40,
  },
  buttonLabel: {
    fontSize: 10, // Reduced font size for the button text
    color: "white",
  },
});

export default BalanceBubbles;
