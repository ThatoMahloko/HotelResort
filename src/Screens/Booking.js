import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import { Icon, FAB } from 'react-native-elements'
import { styles } from '../../assets/styles/styles'
import { db } from '../../config/firebase'
import React from 'react'

const Booking = ({ navigation, route }) => {

    React.useEffect(() => {
        console.log(route.params)
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.avatars}>
                <FAB
                    visible={true}
                    icon={{ name: 'left', type: 'ant-design', color: '#FF9F45' }}
                    color="white"
                    style={{ right: '35%' }}
                    onPress={() => navigation.goBack()}
                />
                <Text style={{ right: '50%', fontFamily: 'Roboto_300Light' }}>Booking</Text>

            </View>

            <View style={{ alignItems: 'flex-start' }}>

                {
                    <TouchableOpacity>
                        <Text style={{ fontFamily: 'Roboto_300Light', fontSize: 25 }}>Select  check-in date</Text>
                    </TouchableOpacity>
                }

                {
                    <TouchableOpacity>
                        <Text style={{ fontFamily: 'Roboto_300Light', fontSize: 25 }}>Select  check-out date</Text>
                    </TouchableOpacity>
                }

                {
                    <TouchableOpacity style={{ flexDirection: 'row' }}>
                        <Text style={{ fontFamily: 'Roboto_300Light', fontSize: 25 }}>Select  check-in date</Text>
                        <FAB
                            visible={true}
                            icon={{ name: 'left', type: 'ant-design', color: '#FF9F45' }}
                            color="white"
                            // style={{ right: '35%' }}
                            onPress={() => navigation.goBack()}
                        />
                    </TouchableOpacity>
                }
            </View>

            <ImageBackground
                source={{ uri: route.params.images[0] }}
                style={{ width: 390, height: 380, top: '4%', borderRadius: 20, padding: 20, paddingTop: '85%', alignSelf: 'center' }}
                imageStyle={{ borderRadius: 20 }}
            >
                <Text style={{ fontFamily: 'Roboto_300Light', color: '#FFF', fontSize: 18 }}>{route.params.name}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Icon
                        type="entypo"
                        name='location-pin'
                        color={'#FFFF'}
                    />

                    <Text style={{ fontFamily: 'Roboto_300Light', color: '#FFF', fontSize: 16 }}>Hotel Rock Resort</Text>
                    <View style={{ flexDirection: 'row', left: '35%', bottom: '18%' }}>
                        <TouchableOpacity>
                            <Icon
                                size={20}
                                type="font-awesome"
                                name='heart-o'
                                color={'#FFFF'}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => onShare()}>
                            <Icon
                                size={34}
                                type="ant-desig"
                                name='share'
                                color={'#FFFF'}
                            />
                        </TouchableOpacity>

                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Booking