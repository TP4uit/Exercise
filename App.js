import React, { useState } from 'react';
import { View } from 'react-native';
import LoginScreen from './LoginScreen';
import SuccessScreen from './SuccessScreen';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('LoginScreen');

  // Custom navigation object
  const navigation = {
    navigate: (screenName) => {
      setCurrentScreen(screenName);
    }
  };

  // Render screens based on current screen state
  const renderScreen = () => {
    switch (currentScreen) {
      case 'LoginScreen':
        return <LoginScreen navigation={navigation} />;
      case 'SuccessScreen':
        return <SuccessScreen navigation={navigation} />;
      default:
        return <LoginScreen navigation={navigation} />;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {renderScreen()}
    </View>
  );
};

export default App;