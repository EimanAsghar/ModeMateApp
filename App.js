import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { NativeBaseProvider, Box, Container } from "native-base";
import theme from './theme';
import { Home } from "./screens";
import { StackNavigation } from './navigation';
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
        <StackNavigation />
    </NativeBaseProvider>
  );
}

