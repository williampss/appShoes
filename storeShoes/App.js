import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text} from 'react-native';
import Routes from './src/router';


export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#000" translucent={true}/>
      <Routes/>
    </>
  
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
