import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import axios from 'axios';
import { AppNavigation } from './app/navigations/AppNavigation';

export default function App() {
  
  return (
    <>
      <AppNavigation />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5'
  },
});
