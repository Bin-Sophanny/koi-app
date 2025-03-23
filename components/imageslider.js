import React from "react";
import { View, Image, Dimensions, StyleSheet, StatusBar} from "react-native";
import Swiper from "react-native-swiper";
const { width,} = Dimensions.get("window"); // Get screen width
const ImageSlider = ({ images }) => {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
    <Swiper
      style={styles.wrapper}
      showsButtons={false} // Hide default navigation buttons
      autoplay={true} // Enable auto-play
      autoplayTimeout={3} // Change image every 3 seconds
      loop={true} // Loop through images
      dotStyle={styles.flatDot} // Custom style for inactive dots
      activeDotStyle={styles.activeFlatDot} // Custom style for active dots
      paginationStyle={styles.pagination}
    >
      {images.map((image, index) => (
        <View key={index} style={styles.slide}>
          <Image source={image} style={styles.image} />
        </View>
      ))}
    </Swiper>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginBottom:30,
  },
  image: {
    width: width,
    height: 300,
    resizeMode: 'stretch',
    // Adjust height as needed
  },
  flatDot: {
    backgroundColor: "#d3d3d3", // Inactive dot color
    width: 20, // Width of the flat indicator
    height: 3, // Height of the flat indicator
    borderRadius: 0, // Remove rounded corners for a flat look
    marginHorizontal: 4, // Space between dots
  },
  activeFlatDot: {
    backgroundColor: "#f6962f", // Active dot color
    width: 20, // Width of the active flat indicator
    height: 3, // Height of the active flat indicator
    borderRadius: 0, // Remove rounded corners for a flat look
    marginHorizontal: 4, // Space between dots
  },
  pagination: {
    top: 295, // Position dots 10px from the bottom
  },
  container: {
    flex: 1,
  },
});
export default ImageSlider;
