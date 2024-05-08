import { HStack, Container, IconButton } from "native-base";
import {
    View, Text, Image, Alert
} from 'react-native';
export default function InspirationCard() {
    return (
        <Container padding={4} margin={4}>
            <View>
                <Text>
                    Inspirations...
                </Text>
            </View>
            <HStack space={4} alignItems="center" paddingTop={4} margin={2}>
                <IconButton rounded={'xl'} bg={'secondary.400'} variant={'solid'} size={70} icon={<Image source={require('../../assets/images/BookOpenText.png')} />}
                    onPress={() => Alert.alert('Book Button pressed')}
                />
                <IconButton   rounded={'xl'} bg={'secondary.400'} variant={'solid'} size={70} icon={<Image source={require('../../assets/images/HandHeart.png')} />}
                    onPress={() => Alert.alert('Hand Heart Button pressed')}
                />
                <IconButton  rounded={'xl'} bg={'secondary.400'} variant={'solid'} size={70} icon={<Image source={require('../../assets/images/MusicNotes.png')} />}
                    onPress={() => Alert.alert('Music Button pressed')} />
                <IconButton  rounded={'xl'} bg={'secondary.400'} variant={'solid'} size={70} icon={<Image source={require('../../assets/images/PlayCircle.png')} />}
                    onPress={() => Alert.alert('play circule Button pressed')} />

            </HStack>
        </Container>

    );
}

