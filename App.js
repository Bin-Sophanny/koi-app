import React, { useEffect, useState } from 'react';
import { View, StyleSheet, StatusBar, SafeAreaView } from 'react-native'; // Import StatusBar
import BottomNav from './components/BottomNav';
import SplashScreen from './components/SplashScreen';
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate a loading process (e.g., fetching data, initializing app)
    setTimeout(() => {
      setIsLoading(false); // Set loading to false after 2 seconds
    }, 2000);
  }, []);

  if (isLoading) {
    // Show the SplashScreen component while loading
    return <SplashScreen />;
  }
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.content}>
      {/* Make the status bar transparent */}
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      {/* Your main content */}
        <BottomNav /> 
        </SafeAreaView>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Main background color
  },
  content: {
    flex: 1,
  },
});

export default App;