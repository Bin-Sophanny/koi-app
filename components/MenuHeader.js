import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet,} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MenuScreen from "../screens/MenuScreen"; // Import your MenuScreen component

const MenuHeader = () => {
  const [selected, setSelected] = useState("Pickup");
  const [showPopup, setShowPopup] = useState(false);

  return (
    
    <View style={styles.container}>
      {/* First Row: Title & Magnify Icon */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          paddingHorizontal: 0,
          height: 45,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold", textAlign: "center", flex: 1 ,paddingLeft:18}}>
          MENU
        </Text>
        <TouchableOpacity activeOpacity={0.7}>
          <MaterialCommunityIcons name="magnify" size={26} color="#f6962f" />
        </TouchableOpacity>
      </View>

      {/* Second Row: Location & Pickup/Delivery in the Same Line */}
      <View style={styles.row}>
        {/* Location */}
        <TouchableOpacity style={styles.location} activeOpacity={0.7}>
          <Text style={styles.locationText}>STREET 2004</Text>
          <MaterialCommunityIcons name="chevron-down" size={20} color="#f6962f" />
        </TouchableOpacity>

        {/* Pickup & Delivery */}
        <View style={styles.pickupDelivery}>
          <TouchableOpacity
            style={styles.option}
            activeOpacity={0.7}
            onPress={() => setSelected("Pickup")}
          >
            <Text style={[styles.optionText, selected === "Pickup" && styles.activeText]}>
              Pickup
            </Text>
            {selected === "Pickup" && <View style={styles.activeIndicator} />}
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.option}
            activeOpacity={0.7}
            onPress={() => setShowPopup(true)}
          >
            <Text style={[styles.optionText, selected === "Delivery" && styles.activeText]}>
              Delivery
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Show MenuScreen when Pickup is selected */}
      {selected === "Pickup" && <MenuScreen />}

      {/* Delivery Popup */}
      <Modal visible={showPopup} transparent animationType="fade">
        <View style={styles.popupContainer}>
          <View style={styles.popup}>
            <Text style={styles.popupText}>Coming Soon</Text>
            <View style={styles.popupLine}></View>
            <TouchableOpacity onPress={() => setShowPopup(false)} style={styles.okButton} activeOpacity={1}>
              <Text style={styles.okText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: 0 },
  location: { flexDirection: "row", alignItems: "center", marginRight: 160 },
  locationText: { fontSize: 14, color: "#f6962f", fontWeight: "bold" },
  pickupDelivery: { flexDirection: "row", alignItems: "center" },
  option: { alignItems: "center", marginHorizontal: 5 },
  optionText: { fontSize: 14, fontWeight: "bold", color: "gray" },
  activeText: { color: "black" },
  activeIndicator: { height: 4, width: 40, backgroundColor: "#f6962f", marginTop: 2, borderRadius: 2 },
  
  // Popup styles
  popupContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  popup: {
    backgroundColor: "white",
    height:90,
    borderRadius: 15,
    alignItems: "center",
    width: 300,
    paddingTop: 15,
  },
  popupText: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  popupLine: {
    width: "100%",
    height: 1,
    backgroundColor: "gray",
    marginBottom: 10, 
  },
  okButton: { width: "100%", alignItems: "center" },
  okText: { fontSize: 18, fontWeight: "bold", color: "#f6962f" },
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default MenuHeader;
