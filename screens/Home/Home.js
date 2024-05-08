import React, { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";
import {
    View, Text, StyleSheet, Alert,
} from 'react-native';
import { Button, Icon, Center, VStack } from "native-base";
import { Entypo } from '@expo/vector-icons';
import { InspirationCard } from "../../components";
const Home = () => {

    useEffect(() => {
        if (SplashScreen) {
            SplashScreen.hide();
        }
    }, [])

    return (
        <VStack space={4} alignItems="center" width={'100%'} height={'100%'} >
            <View width={'100%'} height={'10%'} />
            <View width={'100%'} height={'70%'} >
                <InspirationCard />
            </View>
            <View width={'100%'} height={'20%'}>
                <Center>
                    <Button colorScheme="primary" variant="rounded" rightIcon={<Icon as={Entypo} name="plus" size="2xl" color={'white'} />}
                        onPress={() => Alert.alert('Simple Button pressed')}>
                        <Text style={{ color: 'white' }}>
                            Log your mood
                        </Text>
                    </Button>
                </Center>
            </View>

        </VStack>

    )
}



export default Home;