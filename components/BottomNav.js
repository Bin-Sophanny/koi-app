import React, { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity, StyleSheet, Image } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import MenuScreen from "../screens/MenuScreen";
import ScanScreen from "../screens/ScanScreen";
import HistoryScreen from "../screens/HistoryScreen";
import AccountScreen from "../screens/AccountScreen";
import MenuHeader from "../components/MenuHeader";
import ScanButton from "../components/ScanButton";
import HistoryHeader from "../components/HistoryHeader";

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  const [selectedTab, setSelectedTab] = useState("Orders");
  const [selectedSubTab, setSelectedSubTab] = useState("All");

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    setSelectedSubTab("All"); // Reset subtab when main tab changes
  };

  const handleSubTabChange = (subTab) => {
    setSelectedSubTab(subTab);
  };

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
              icon = (
                <Image
                  source={require("../assets/bubble-tea.png")}
                  style={{
                    width: size,
                    height: size,
                    tintColor: focused ? "#f6962f" : "gray",
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
          tabBarActiveTintColor: "#f6962f",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            backgroundColor: "white",
            height: 50,
            paddingBottom: 5,
          },
          tabBarButton: (props) => (
            <TouchableOpacity {...props} activeOpacity={0.7} style={styles.tabButton} />
          ),
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen
          name="Menu"
          component={MenuScreen}
          options={{
            headerTitle: () => <MenuHeader />,
          }}
        />
        <Tab.Screen
          name="Scan"
          component={ScanScreen}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="line-scan" size={size} color={color} />,
            tabBarButton: (props) => <ScanButton {...props} />,
          }}
        />
        <Tab.Screen
          name="History"
          component={HistoryScreen}
          options={{
            headerTitle: () => (
              <HistoryHeader
                selectedTab={selectedTab}
                selectedSubTab={selectedSubTab}
                onTabChange={handleTabChange}
                onSubTabChange={handleSubTabChange}
              />
            ),
            headerStyle: {
              height: 110, // Set your desired height here
            },
          }}
          initialParams={{ selectedTab, selectedSubTab }}
        />
        <Tab.Screen 
  name="Account" 
  component={AccountScreen}
  options={{
    headerTitle: 'Account', // Set the title
    headerTitleStyle: {
      fontWeight: 'bold', // Make the title bold
    },
    headerTitleAlign: 'center', // Center the title
    headerRight: () => (
      <TouchableOpacity 
        style={{ marginRight: 15 }} 
        onPress={() => {}}
        activeOpacity={0.7}
      >
        <MaterialCommunityIcons name="menu" size={24} color="#f6962f" />
      </TouchableOpacity>
    ),
  }}
/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BottomNav;