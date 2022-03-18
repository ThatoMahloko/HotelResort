import { View, Text } from 'react-native'
import { styles } from '../../assets/styles/styles'
import React from 'react'

export default function Oops({route}) {
  return (
    <View style={styles.container}>
      <Text>Oops</Text>
      <Text>{route.params.id}</Text>
    </View>
  )
}