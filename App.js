import React from 'react';
import { View, StyleSheet, } from 'react-native';
import BottomNav from './components/BottomNav';

const App = () => {
  return (
    <View style={styles.container}>
      <BottomNav />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
  },
});

export default App;