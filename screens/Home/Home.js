import React, { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";
import {
    View, Text, StyleSheet
} from 'react-native';
import { Button, Icon, Center, VStack } from "native-base";
import { Entypo } from '@expo/vector-icons';
import { InspirationCard, MoodDetails } from "../../components";

const Home = ({ navigation }) => {

    const moodData = [
        {date: '2 May 2024', mode: 'Good', details: 'Joyful', note: "good day", icon: require('../../assets/images/smile_emoji.png') },
        {date: '2 February 2024', mode: 'BAD', details: 'Heavy', note: "Not good day", icon: require('../../assets/images/sad.png') },
        {date: '1 May 2025', mode: 'AWESOME', details: 'Joyful', note: "good day", icon: require('../../assets/images/bigsmile.png') },
        {date: '3 July 2023', mode: 'CRY', details: 'Heavy', note: "Not good day", icon: require('../../assets/images/cry.png') },
        {date: '2 February 2024', mode: 'BAD', details: 'Heavy', note: "Not good day", icon: require('../../assets/images/sad.png') },
    ]

    useEffect(() => {
        if (SplashScreen) {
            SplashScreen.hide();
        }
    }, [])

    return (
        <VStack space={4} alignItems="center" width={'100%'} height={'100%'} bg={'secondary.300'}>
            <View width={'100%'} height={'80%'} >
            
                <InspirationCard />
                
                <MoodDetails  data={moodData}/>
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