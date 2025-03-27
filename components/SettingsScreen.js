import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons,MaterialCommunityIcons } from "@expo/vector-icons";

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      {/* Personal Section */}
      <Text style={styles.sectionTitle}>PERSONAL</Text>
      <View style={styles.gridContainer}>
        <TouchableOpacity style={styles.button} onPress={() => console.log("Inbox")}>
          <MaterialIcons name="email" size={24} color="#888" />
          <Text style={styles.buttonText}>Inbox</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => console.log("Personalization")}>
          <MaterialIcons name="settings" size={24} color="#888" />
          <Text style={styles.buttonText}>Personalization</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => console.log("Favorites")}>
          <MaterialIcons name="favorite" size={24} color="#888" />
          <Text style={styles.buttonText}>Favorites</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => console.log("Addresses")}>
          <MaterialIcons name="location-on" size={24} color="#888" />
          <Text style={styles.buttonText}>Addresses</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => console.log("Vouchers")}>
          <MaterialIcons name="local-offer" size={24} color="#888" />
          <Text style={styles.buttonText}>Vouchers</Text>
        </TouchableOpacity>
      </View>

      {/* Shortcuts Section */}
      <Text style={styles.sectionTitle}>SHORTCUTS</Text>
      <View style={styles.gridContainer}>
        <TouchableOpacity style={styles.button} onPress={() => console.log("Stores")}>
          <MaterialIcons name="store" size={24} color="#888" />
          <Text style={styles.buttonText}>Stores</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => console.log("Announcements")}>
          <MaterialIcons name="notifications-none" size={24} color="#888" />
          <Text style={styles.buttonText}>Announcements</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => console.log("Rewards")}>
          <MaterialIcons name="star" size={24} color="#888" />
          <Text style={styles.buttonText}>Rewards</Text>
        </TouchableOpacity>
      </View>

      {/* Contacts Section */}
      <Text style={styles.sectionTitle}>CONTACTS</Text>
      <View style={styles.gridContainer}>
        <TouchableOpacity style={styles.button} onPress={() => console.log("Customer Service")}>
          <MaterialIcons name="support-agent" size={24} color="#888" />
          <Text style={styles.buttonText}>Customer Service</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => console.log("Feedback")}>
          <MaterialIcons name="feedback" size={24} color="#888" />
          <Text style={styles.buttonText}>Feedback</Text>
        </TouchableOpacity>
      </View>

      {/* Social Media Links */}
      <View style={styles.socialLinksContainer}>
        <Text style={styles.socialLinksText}>Stay connected!</Text>
        <View style={styles.socialIconsContainer}>
            <TouchableOpacity>
          <MaterialIcons name="mail" size={24} color="#888" />
          </TouchableOpacity>
          <TouchableOpacity>
          <MaterialIcons name="facebook" size={24} color="#888" />
          </TouchableOpacity>
          <TouchableOpacity>
          <MaterialCommunityIcons name="instagram" size={24} color="#888" />
            </TouchableOpacity>
            <TouchableOpacity>
          <MaterialIcons name="tiktok" size={24} color="#888" />
          </TouchableOpacity>
          <TouchableOpacity>
          <MaterialCommunityIcons name="youtube" size={24} color="#888" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  button: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  buttonText: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: "bold",
  },
  socialLinksContainer: {
    marginTop: 30,
    alignItems: "center",
  },
  socialLinksText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  socialIconsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "70%",
  },
});

export default SettingsScreen;