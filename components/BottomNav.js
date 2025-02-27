import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons"; // Import MaterialCommunityIcons
import { TouchableOpacity, StyleSheet, View, Image } from "react-native"; // Import Image
import HomeScreen from "../screens/HomeScreen";
import MenuScreen from "../screens/MenuScreen";
import ScanScreen from "../screens/ScanScreen";
import HistoryScreen from "../screens/HistoryScreen";
import AccountScreen from "../screens/AccountScreen";

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: route.name !== "Home",
          tabBarIcon: ({ focused, color, size }) => {
            let icon;
            if (route.name === "Home") {
              icon = <MaterialCommunityIcons name="home" size={size} color={color} />;
            } else if (route.name === "Menu") {
              // Custom Bubble Tea Icon
              icon = (
                <Image
                  source={require("../assets/bubble-tea.png")} // Path to your image
                  style={{
                    width: size, // Match the size of other icons
                    height: size,
                    tintColor: focused ? "#f6962f" : "gray", // Optional: Change color based on focus
                  }}
                />
              );
            } else if (route.name === "Scan") {
              icon = <MaterialCommunityIcons name="line-scan" size={size} color={color} />;
            } else if (route.name === "History") {
              icon = <MaterialCommunityIcons name="history" size={size} color={color} />;
            } else if (route.name === "Account") {
              icon = <MaterialCommunityIcons name="account" size={size} color={color} />;
            }
            return icon;
          },
          tabBarActiveTintColor: "#f6962f", // Gold color for active tab
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            backgroundColor: "white",
            height: 50,
            paddingBottom: 5,
          },
          // Default tab button behavior for all tabs except "Scan"
          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
              activeOpacity={0.7} // Set opacity to 0.7 when pressed
              style={styles.tabButton}
            />
          ),
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Menu" component={MenuScreen} />
        {/* Custom Scan Button */}
        <Tab.Screen
          name="Scan"
          component={ScanScreen}
          options={{
            tabBarLabel: "", // Hide the label for the "Scan" tab
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="barcode-scan" size={size} color={color} />
            ),
            tabBarButton: (props) => (
              <View style={styles.scanButtonContainer}>
                <TouchableOpacity
                  {...props}
                  activeOpacity={0.7} // Set opacity to 0.7 when pressed
                  style={styles.scanButton}
                >
                  <MaterialCommunityIcons name="line-scan" size={25} color="white" />
                </TouchableOpacity>
              </View>
            ),
          }}
        />
        <Tab.Screen name="History" component={HistoryScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabButton: {
    flex: 1, // Ensure the button takes up the full space of the tab
    justifyContent: "center",
    alignItems: "center",
  },
  scanButtonContainer: {
    position: "absolute", // Position the Scan button above the tab bar
    bottom: 2, // Adjust vertical position
    width: 80,
    height: 40,
    borderRadius: 6, // Circular shape
    backgroundColor: "white", // Background color for the button
    justifyContent: "center",
    alignItems: "center", // Add shadow for elevation effect
  },
  scanButton: {
    width: 35,
    height: 30,
    borderRadius: 6, // Circular shape
    backgroundColor: "#f6962f", // Gold background color
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BottomNav;