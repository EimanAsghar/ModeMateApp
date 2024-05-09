import React, { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";
import {
    View, Text, Container
} from 'react-native';
import { Button, Icon, Center, VStack } from "native-base";
import { Entypo } from '@expo/vector-icons';
import { InspirationCard, MoodCardDetails } from "../../components";
const Home = ({ navigation }) => {

    useEffect(() => {
        if (SplashScreen) {
            SplashScreen.hide();
        }
    }, [])

    return (
        <VStack space={4} alignItems="center" width={'100%'} height={'100%'} bg={'secondary.300'}>
            <View width={'100%'} height={'80%'} >
                <InspirationCard />
                <MoodCardDetails />
            </View>
            <View width={'100%'} height={'20%'}>
                <Center>
                    <Button  size="_custom" colorScheme="primary" variant="rounded" rightIcon={<Icon as={Entypo} name="plus" size="lg" color={'white'} />}
                        onPress={() => navigation.navigate('AddMode')}>
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