import { View, FlatList, StyleSheet, Dimensions, Alert } from "react-native";
import React, { useState } from "react";
import { Button, Icon, Center, VStack, Badge, HStack, Text, TextArea } from "native-base";
import AntDesign from '@expo/vector-icons/AntDesign';
import { ImageSlider } from '../../components';

const { width, height } = Dimensions.get('window');

const feelingList = ['Glad', 'Grateful', 'Delighted', 'Pleased', 'Optimistic', 'Exited', 'Joyful', 'Self-confidence'
    , 'Powerful', 'Upset', 'Heavy', 'Sorrowful', 'Crushed', 'Disgusted']

const emoji = [
    { id: 1, title: 'AWESOME', uri: require('../../assets/images/bigsmile.png') },
    { id: 2, title: 'FUN', uri: require('../../assets/images/crazy.png') },
    { id: 3, title: 'VERY FUN', uri: require('../../assets/images/clown.png') },
    { id: 4, title: 'CRY', uri: require('../../assets/images/cry.png') },
    { id: 5, title: 'FANCY', uri: require('../../assets/images/glass_emoji.png') },
    { id: 6, title: 'LOVE', uri: require('../../assets/images/love_emoji.png') },
    { id: 6, title: 'RICH', uri: require('../../assets/images/money_emoji.png') },
    { id: 7, title: 'SAD', uri: require('../../assets/images/sad.png') },
    { id: 8, title: 'HAPPY', uri: require('../../assets/images/smile_emoji.png') },
    { id: 7, title: 'SUPRISED', uri: require('../../assets/images/suprised.png') },

]
const AddMode = ({ navigation }) => {
    const [text, setText] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    return (
        <VStack space={4} alignItems="center" width={'100%'} height={'100%'} bg={'secondary.300'}>
            <View width={'100%'} height={'10%'}>
                <Center style={{ padding: 30 }}>
                    <Text fontSize={'xl'}>
                        How are you ?
                    </Text>
                </Center>

            </View>
            <View width={'100%'} height={'50%'}>
                <View style={{ flex: 1 }}>
                    <ImageSlider images={emoji} />
                </View>
            </View>
            <View width={'100%'} height={'20%'} style={{ padding: 20, margin: 4 }}>
                <Text fontSize={'lg'} style={{ paddingBottom: 30 }}>
                    Specify your feeling
                </Text>
                <HStack >
                    <FlatList
                        data={feelingList}
                        horizontal={true}
                        ItemSeparatorComponent={<View style={{ width: 10 }} />}
                        showsHorizontalScrollIndicator={false}
                        renderItem={
                            ({ item }) => <Badge variant={"solid"} >
                                {item}
                            </Badge>
                        }
                    />
                </HStack>
                {showPopup && (
                    <View style={styles.popup}>
                        <VStack width={'100%'}>
                            <Text paddingBottom={4}>
                                Add Note
                            </Text>
                            <TextArea
                                padding={4}
                                rounded={10}
                                width={'100%'}
                                value={text}
                                onChangeText={setText}
                                placeholder="Enter text"
                            />
                            <Center style={{ paddingTop: 20 }}>
                                <Button size={'_custom'} colorScheme="primary" variant="rounded"
                                onPress={()=>{
                                    Alert.alert('Saved Succesfully')
                                    setShowPopup(false)
                                }}
                                >
                                    <Text style={{ color: 'white' }}>
                                        Save
                                    </Text>
                                </Button>
                            </Center>
                        </VStack>
                    </View>
                )}
                {
                    !showPopup && <View style={{ padding: 30 }}>
                        <Center>
                            <Button size={'_custom'} colorScheme="primary" variant="rounded"
                                onPress={() => setShowPopup(true)}
                                rightIcon={<Icon as={AntDesign} name="plus" size='lg' color={'white'} />}
                            >
                                <Text style={{ color: 'white' }}>
                                    Next
                                </Text>
                            </Button>
                        </Center>
                    </View>
                }

            </View>

        </VStack>
    );
}

const styles = StyleSheet.create({
    popup: {
        position: 'absolute',
        left: 0,
        right: 0,
        backgroundColor: 'white',
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 30,
        height: 300
    },
    textInput: {
        flex: 1,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginRight: 10,
        paddingHorizontal: 10,
    }
});

export default AddMode;