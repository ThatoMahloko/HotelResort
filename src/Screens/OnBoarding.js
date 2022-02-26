import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Illustration from '../../assets/icons/Illustration'
import { styles } from '../../assets/styles/styles'
import { Icon, Button } from 'react-native-elements'
export default function OnBoarding({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.onBoardingContainer}>
                <View style={styles.illustration}>
                    <Illustration />
                </View>
                <Text style={styles.illustrationTitle}>Discover a Hotel & Resort to Book a Suitable Room</Text>
                <Text style={styles.illustrationPargraph}>
                    The Hotel and resort business is one of the
                    best and loyal business in the global market.
                    We are the agency that helps to book you a
                    good room in a suitable palace at a
                    reasonable price.
                </Text>

                <Button style={styles.button} title={'Get Started'} icon={
                    {
                        type: 'font-awsome',
                        name: 'chevron-right',
                        color: 'white'
                    }}
                    iconRight
                    buttonStyle={{
                        backgroundColor: 'rgba(255,159, 69,100)',
                        borderRadius: 20, height: 60
                    }}
                    containerStyle={{ marginTop: '20%', width: 340, alignSelf: 'center' }}
                    titleStyle={{ fontFamily: 'Roboto_400Regular', fontWeight: '' }}
                    onPress={() => navigation.navigate('Login')}
                >

                </Button>
            </View>
        </View>
    )
}

