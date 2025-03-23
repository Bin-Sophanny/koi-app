// SplashScreen.js
import React from 'react';
import { View, Image, Text, StyleSheet, ActivityIndicator } from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.splashContainer}>
      <Image
        source={require("../assets/splash.jpg")} // Replace with your splash image path
        style={styles.splashImage}
      />
      <View style={styles.brandingContainer}>
        <Image
          source={require("../assets/branding.jpg")} // Replace with your logo path
          style={styles.logo}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    splashContainer: {
      flex: 1,
      justifyContent: 'flex-start', // Align splash image to the top
      alignItems: 'center',
      backgroundColor: '#ffffff', // Set your splash screen background color
    },
    splashImage: {
      width: '90%',
      height: '90%', // Reduce height to move the image up
      resizeMode: 'contain', // Adjust based on your image
    },
    brandingContainer: {
      position: 'absolute',
      bottom: -90, // Position the branding content towards the bottom
      alignItems: 'center',
    },
    logo: {
      width: 300, // Adjust based on your logo size
      height: 300, // Adjust based on your logo size
      resizeMode: 'contain',
    },
  });

export default SplashScreen;