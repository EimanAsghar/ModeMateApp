import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider, Box, Container } from "native-base";
import theme from './theme';
import { Home } from "./screens";
export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar style='auto' />
      <Container bg="secondary.300" h={"full"} w={"full"} maxWidth="100%">
        <Home />
      </Container>
    </NativeBaseProvider>
  );
}

