import React from "react";
import { View, Text, StyleSheet, ScrollView ,} from "react-native"; // Import ScrollView here
import ImageSlider from "../components/imageslider";
import BalanceBubbles from "../components/BalanceBubbles";
import PickupDeliveryRow from "../components/PickupDeliveryRow";
import AnnouncementCard from "../components/AnnouncementCard";
const HomeScreen = () => {
  const images = [
    require("../assets/slider1.jpg"),
    require("../assets/slider2.jpg"),
    require("../assets/slider3.jpg"),
    require("../assets/slider4.jpg"),
  ];
  return (
    <ScrollView style={styles.container}>
      <View style={styles.slideContainer}>
        <ImageSlider images={images} />
      </View>
      <View>
        <BalanceBubbles/>
      </View>
      <View>
        <PickupDeliveryRow />
      </View>
        <AnnouncementCard />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white", // Set background color for the entire screen
  },
  slideContainer: {
    width: "100%",
    height: 300, // Fixed height for the image slider
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    paddingBottom: 20,
  },
});
export default HomeScreen;
