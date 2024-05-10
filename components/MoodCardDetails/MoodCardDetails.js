import {
    Container,
    Text,
    Box,
    HStack,
    Divider,
    VStack
} from "native-base";
import {
    View, Image,
} from 'react-native';

const MoodCardDetails = () => {

    return (
        <Container padding={4} margin={4}>
            <Text fontSize={'lg'}>
                May 2023
            </Text>
            <View paddingTop={4} margin={2} >
                <Box w={350} h={100} rounded={'xl'} bg='secondary.400'>
                    <HStack space={4} margin={4} padding={4}>
                        <View>
                            <VStack>
                                <Text>
                                    01
                                </Text>
                                <Text>
                                    May
                                </Text>
                            </VStack>
                        </View>
                        <Divider orientation="vertical" />
                        <View>
                            <VStack>
                                <Text>
                                    AWESOME
                                </Text>
                                <Text color={'secondary.200'}>
                                    Self-confidence, Powerful
                                </Text>
                            </VStack>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: '100%', height: '100%' }} source={require('../../assets/images/bigsmile.png')} />
                        </View>
                    </HStack>
                </Box>
            </View>

        </Container>
    );
}


export default MoodCardDetails;