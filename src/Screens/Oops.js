import { View, Text } from 'react-native'
import { styles } from '../../assets/styles/styles'
import Outdoor from '../../assets/icons/Outdoor'
import { Avatar, FAB } from 'react-native-elements'
import React from 'react'

export default function Oops({navigation}) {
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
        <Text style={{ right: '50%', fontFamily: 'Roboto_300Light' }}>Oops</Text>

      </View>
      <Text style={{ fontFamily: 'Roboto_700Bold', color: '#FCB330', fontSize: 60 }}>OOPS!</Text>
      <Text style={{ fontFamily: 'Roboto_700Bold', color: '#FCB330', fontSize: 60 }}>Error</Text>
      <View style={styles.onBoardingContainer}>
        <Outdoor />
      </View>
    </View>
  )
}