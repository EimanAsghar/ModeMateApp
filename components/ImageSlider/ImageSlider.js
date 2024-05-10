import React, { useState } from 'react';
import { View, Image, FlatList, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Button, Text } from 'native-base';

const { width } = Dimensions.get('window');

const ImageSlider = ({ images }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSwipe = (event) => {
        const { contentOffset } = event.nativeEvent;
        const newIndex = Math.floor(contentOffset.x / width);
        setCurrentIndex(newIndex);
    };

    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.itemContainer}>
                <Image
                    source={item.uri}
                    style={styles.image}
                    resizeMode="cover"
                />
                <View>
                    <Text>
                        {item.title}
                    </Text>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={images}
                renderItem={renderItem}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                onMomentumScrollEnd={handleSwipe}
            />
            <View style={styles.pagination}>
                {images.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dot,
                            index === currentIndex ? styles.activeDot : null,
                        ]}
                    />
                ))}
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    itemContainer: {
        width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: width * 0.8,
        height: 200,
        borderRadius: 10,
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: 'gray',
        marginHorizontal: 5,
    },
    activeDot: {
        backgroundColor: 'blue',
    },
});


export default ImageSlider;