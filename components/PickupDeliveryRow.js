// PickupDeliveryRow.js

import React from 'react';
import { View, Text, Image, StyleSheet ,TouchableOpacity} from 'react-native';

const PickupDeliveryRow = () => {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => {}} activeOpacity={0.7}>
        <View style={styles.imageContainer}>
        <Image source={require("../assets/pickup.jpg")} style={styles.image} />
        <Text style={styles.label}>Pickup</Text>
      </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} activeOpacity={0.7}>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/delivery.jpg")} style={styles.image} />
        <Text style={styles.label}>Delivery</Text>
      </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    backgroundColor: 'white',
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: 167,
    height: 130,
    resizeMode: 'cover',
  },
  label: {
    fontSize: 15,
    fontWeight: 'w400',
    marginTop: 10,
  },
});

export default PickupDeliveryRow;