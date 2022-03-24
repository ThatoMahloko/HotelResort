import { View, Text } from 'react-native'
import { styles } from '../../assets/styles/styles'
import Success from '../../assets/icons/Success'
import { Button, } from 'react-native-elements'
import React from 'react'

export default function BookingSuccessFull({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.avatars}>
                <Text style={{ right: '50%', fontFamily: 'Roboto_300Light' }}>Booking</Text>
            </View>
            <View style={styles.onBoardingContainer}>
                <View style={styles.illustration}>
                    <Success />
                </View>
            </View>
            <Text style={{ fontFamily: 'Roboto_700Bold', color: '#FCB330', fontSize: 60, bottom: '10%' }}>SUCCESS!</Text>
            <Button
                title={'Home'}
                containerStyle={{
                    width: 180,
                    marginHorizontal: 50,
                    marginVertical: 10,
                    top: '18%',
                    elevation: 6
                }}
                titleStyle={{ fontFamily: 'Roboto_300Light', color: '#FF9F45' }}
                buttonStyle={{ backgroundColor: '#FFE1C6' }}
                onPress={() => navigation.navigate('BottomNavigationPages')}
            />
        </View>
    )
}