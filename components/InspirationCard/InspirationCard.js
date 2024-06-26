import { HStack, Container, IconButton, Text } from "native-base";
import {
    View, Image, Alert, FlatList, StyleSheet
} from 'react-native';

const inspirationList = [
    { icon: require('../../assets/images/BookOpenText.png'), message: 'Book Button pressed' },
    { icon: require('../../assets/images/HandHeart.png'), message: 'Hand Heart Button pressed' },
    { icon: require('../../assets/images/MusicNotes.png'), message: 'Music Button pressed' },
    { icon: require('../../assets/images/PlayCircle.png'), message: 'play circule Button pressed' },

]
export default function InspirationCard() {
    return (
        <Container padding={2} margin={2}>
            <View>
                <Text style={styles.heading} fontSize={'lg'} >
                    Inspirations...
                </Text>
            </View>
            <FlatList
                alignItems="center"
                paddingTop={4}
                margin={2}
                data={inspirationList}
                horizontal={true}
                ItemSeparatorComponent={<View style={{ width: 10 }} />}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <IconButton rounded={'xl'} bg={'secondary.400'} variant={'solid'} size={90} icon={<Image source={item.icon} />}
                    onPress={() => Alert.alert(item.message)}
                />
                }

            />
        </Container>

    );
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    }
});

