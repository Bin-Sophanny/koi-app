import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Avatar } from "react-native-paper";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Profile Section */}
        <TouchableOpacity activeOpacity={0.7}>
          <View style={styles.profileSection}>
            <Avatar.Icon size={80} icon="account" backgroundColor="gray" color="white" />
            <Text style={styles.name}>Pisal KAM</Text>
            <Text style={styles.viewProfile}>View Profile ›</Text>
          </View>
          </TouchableOpacity>
          <View style={styles.memberContainer}>
            <Text>0 pts</Text>
          </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures full-screen height
    backgroundColor: "#f0f0f0",
  },
  scrollContainer: {
    paddingTop: 0, // Moves profile section to the top
  },
  profileSection: {
    alignItems: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  viewProfile: {
    color: "#888",
    marginTop: 5,
  },
  memberContainer:{
    flex:1,
    backgroundColor: "white",
    margin: 10,
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default ProfileScreen;
