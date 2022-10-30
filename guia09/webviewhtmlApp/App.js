import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WebScreen from './src/screens/WebScreen';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
const AppNavigator = createStackNavigator({
  Web:{
  screen: WebScreen
  }
  },{ initialRouteName: 'Web' })
  export default createAppContainer (AppNavigator)