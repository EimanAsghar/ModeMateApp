import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { Button, Icon, Center, VStack } from "native-base";
import AntDesign from '@expo/vector-icons/AntDesign';

const AddMode = () => {
    return (
        <VStack space={4} alignItems="center" width={'100%'} height={'100%'} bg={'secondary.300'}>
            <View width={'100%'} height={'10%'} />
            <View width={'100%'} height={'70%'} >

            </View>
            <View width={'100%'} height={'20%'}>
                <Center>
                    <Button size={'_custom'} colorScheme="primary" variant="rounded"
                    rightIcon={<Icon as={AntDesign} name="plus" size='lg' color={'white'}/>}
                    >
                        <Text style={{ color: 'white' }}>
                            Next
                        </Text>
                    </Button>
                </Center>
            </View>

        </VStack>
    );
}

export default AddMode;