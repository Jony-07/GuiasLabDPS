import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/components/Navigation';
export default function App() {
  return (
    <NavigationContainer>
        <Navigation />
    </NavigationContainer>
  );
}

