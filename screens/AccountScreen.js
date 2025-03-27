import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Avatar } from "react-native-paper";
import Svg, { Circle } from "react-native-svg";
import { MaterialIcons } from '@expo/vector-icons';
import SettingsScreen from "../components/SettingsScreen";

const ProfileScreen = () => {
  const progress = 0; // 0 points earned
  const totalPoints = 151; // Points required for Silver
  const percentage = (progress / totalPoints) * 100; // Progress percentage

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

        {/* Membership Section */}
        <TouchableOpacity activeOpacity={0.9}>
          <View style={styles.memberContainer}>
            {/* Progress Circle */}
            <View style={styles.progressContainer}>
              <Svg height="80" width="80" viewBox="0 0 100 100">
                <Circle cx="50" cy="50" r="40" stroke="#E0C3A0" strokeWidth="8" fill="none" />
                <Circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#F9A826"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={`${percentage * 2.51}, 251`} // 251 = Full circumference
                  strokeLinecap="round"
                  transform="rotate(-90 50 50)" // Rotates progress to start from the top
                />
              </Svg>
              <View style={styles.pointsContainer}>
                <Text style={styles.points}>0</Text>
                <Text style={styles.pointsLabel}>pts</Text>
              </View>
            </View>

            {/* Membership Level - Moved Above */}
            <View style={styles.container_column}>
              <View style={styles.memberInfo}>
                <Avatar.Image size={20} source={require("../assets/pearl.png")} />
                <Text style={styles.memberText}>Black Member</Text>
              </View>
              <Text style={styles.subText}>151 to Silver Member</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* Card Section */}
        <View style={styles.cardContainer}>
          <Text style={styles.cardTitle}>MY CARDS (1)</Text>
          <TouchableOpacity style={styles.seeAllButton}>
            <MaterialIcons name="arrow-forward" size={24} color="#F9A826" />
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.card}>
            <Text style={styles.cardText}>Random Card</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardText}>Random Card</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardText}>Random Card</Text>
          </View>
        </ScrollView>
        <View style={styles.avatarContainer}>
          <TouchableOpacity activeOpacity={0.7}>
          <Avatar.Icon size={50} icon="cart" backgroundColor="#F9A826" color="white" />
          <Text style={styles.avatarText}>Purchase</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7}>
          <Avatar.Icon size={50} icon="plus" backgroundColor="#f4f4f4" color="#F9A826" />
          <Text style={styles.avatarText}>Add</Text>
          </TouchableOpacity>
        </View>
        <View>
          <SettingsScreen />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  scrollContainer: {
    paddingTop: 0,
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
  memberContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "white",
    margin: 10,
    padding: 20,
    alignItems: "center",
    borderRadius: 15,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  progressContainer: {
    position: "relative",
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  pointsContainer: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  points: {
    fontSize: 22,
    fontWeight: "bold",
  },
  pointsLabel: {
    fontSize: 12,
    color: "#888",
  },
  memberInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  memberText: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 5,
  },
  subText: {
    color: "#888",
    marginTop: 5,
    marginLeft: 10,
  },
  container_column: {
    flexDirection: "column",
    backgroundColor: "white",
    alignItems: "center",
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  seeAllButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 8,
    borderRadius: 20,
  },
  seeAllText: {
    marginLeft: 5,
    color: "#F9A826",
    fontWeight: "bold",
  },
  card: {
    width: 150,
    height: 200,
    backgroundColor: "white",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },
  cardText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  avatarContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 20,
    marginHorizontal: 110,
  },
  avatarItem: {
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    fontSize: 12,
    textAlign: 'center',
    color: "#acacac",
  },
});

export default ProfileScreen;