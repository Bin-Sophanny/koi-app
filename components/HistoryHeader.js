import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HistoryHeader = ({ selectedTab, selectedSubTab, onTabChange, onSubTabChange }) => {
  const navigation = useNavigation();

  const handleTabPress = (tab) => {
    onTabChange(tab); // Update the state in BottomNav
    navigation.setParams({ selectedTab: tab }); // Update the route params
  };

  const handleSubTabPress = (subTab) => {
    onSubTabChange(subTab); // Update the state in BottomNav
    navigation.setParams({ selectedSubTab: subTab }); // Update the route params
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Main Tabs Container */}
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === "Orders" && styles.activeTab]}
          onPress={() => handleTabPress("Orders")}
        >
          <Text style={[styles.tabText, selectedTab === "Orders" && styles.activeText]}>Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === "Transactions" && styles.activeTab]}
          onPress={() => handleTabPress("Transactions")}
        >
          <Text style={[styles.tabText, selectedTab === "Transactions" && styles.activeText]}>Transactions</Text>
        </TouchableOpacity>
      </View>

      {/* Subtabs Container - Conditionally Rendered */}
      {selectedTab === "Transactions" && (
        <View style={styles.subToggleContainer}>
          {["All", "Payment", "Topup", "Bubbles"].map((subTab) => (
            <TouchableOpacity
              key={subTab}
              style={[styles.subTab, selectedSubTab === subTab && styles.activeSubTab]}
              onPress={() => handleSubTabPress(subTab)}
            >
              <Text style={[styles.subTabText, selectedSubTab === subTab && styles.activeSubText]}>{subTab}</Text>
              {selectedSubTab === subTab && <View style={styles.yellowLine} />}
            </TouchableOpacity>
          ))}
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  toggleContainer: {
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    padding: 3,
    marginHorizontal: 90,
  },
  tab: {
    flex: 1,
    paddingVertical: 3,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    minWidth: 100,
  },
  activeTab: {
    backgroundColor: "white",
  },
  tabText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#777",
  },
  activeText: {
    color: "black",
  },
  subToggleContainer: {
    flexDirection: "row",
    backgroundColor: "transparent",
    borderRadius: 10,
    padding: 3,
    marginTop: 10,
    marginHorizontal: 0, // Align with main tabs
  },
  subTab: {
    flex: 1,
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    minWidth: 80,
    position: "relative", // Needed for the yellow line positioning
  },
  activeSubTab: {
    backgroundColor: "white",
  },
  subTabText: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#777",
  },
  activeSubText: {
    color: "black",
  },
  yellowLine: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: "#f6962f",
  },
});

export default HistoryHeader;