import { StatusBar } from 'expo-status-bar';
import React, { createContext, useContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomNavigation from './src/Navigation/BottomNavigation';
import { NavigationContainer } from '@react-navigation/native';
import SecurePopup from './src/components/SecurePopup';
export const accessContext=createContext()
export default function App() {
  const [validUser,setValidUser]=useState(false);


  return (
		<accessContext.Provider value={{ validUser, setValidUser }}>
			<NavigationContainer>
				<BottomNavigation />
				{!validUser&&<SecurePopup />}
			</NavigationContainer>
		</accessContext.Provider>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
