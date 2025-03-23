import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

const HistoryScreen = () => {
  const route = useRoute();
  const { selectedTab, selectedSubTab } = route.params;

  // Function to render content based on the selected subtab
  const renderSubTabContent = () => {
    switch (selectedSubTab) {
      case "All":
        return <Text style={styles.contentText}>All Transactions Content</Text>;
      case "Payment":
        return <Text style={styles.contentText}>Payment Transactions Content</Text>;
      case "Topup":
        return <Text style={styles.contentText}>Topup Transactions Content</Text>;
      case "Bubbles":
        return <Text style={styles.contentText}>Bubbles Transactions Content</Text>;
      default:
        return <Text style={styles.contentText}>No Content Available</Text>;
    }
  };

  return (
    <View style={styles.container}>
      {/* Dynamic content based on selected tab */}
      <View style={styles.contentContainer}>
        {selectedTab === "Orders" ? (
          <Text style={styles.contentText}>Orders Content</Text>
        ) : (
          renderSubTabContent()
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#f0f0f0",
  },
  contentText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default HistoryScreen;