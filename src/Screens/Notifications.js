import { View, Text, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native'
import { styles } from '../../assets/styles/styles'
import { Icon, Avatar, Card, FAB } from 'react-native-elements'
import React, { useState } from 'react'

export default function Notifications({ navigation }) {
  const [fullView, setFullView] = useState(false)
  const [visible, setVisible] = React.useState(true);

  const visibility = () => {
    if (fullView == false) {
      setFullView(true)
    } else {
      setFullView(false)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.avatars}>
        <FAB
          visible={visible}
          icon={{ name: 'left', type: 'ant-design', color: '#FF9F45' }}
          color="white"
          style={{ right: '30%' }}
          onPress={() => navigation.goBack()} />
        <Text style={{ right: '52%',fontFamily: 'Roboto_300Light' }}>Notifications</Text>
      </View>
      <View style={styles.homeFilterGroup}>
        <View style={styles.homeFlterInput}>
          <TextInput style={{ width: '80%' }} />
          <Icon name='search' type='material' size={45} color='#FFBC80' />
        </View>
        <Card
          containerStyle={{ height: 60, width: 60, borderRadius: 20, bottom: '2%', backgroundColor: '#FFBC80', elevation: 8 }}>
          <Icon name='filter' type='font-awesome' size={30} color='#FFFF' />
        </Card>
      </View>
      <View style={{ top: '2%' }}>
        <ScrollView horizontal={false} contentContainerStyle={{ width: '100%', top: '0%' }}>
          {
            fullView == false ?
              <View style={{ flexDirection: 'row', backgroundColor: '#FFE1C6', elevation: 3, borderRadius: 20, width: 360, padding: 10, height: 130, margin: 5 }}>
                <View style={{ justifyContent: 'center' }}>
                  <Icon
                    type="feather"
                    name='map-pin'
                    color={'#FF9F45'}
                    size={60}
                    iconStyle={{ al: 'center' }}
                  />
                </View>
                <View style={{ margin: 10 }}>
                  <TouchableOpacity style={{ marginRight: -10 }} onPress={visibility}>
                    <Text style={{ fontSize: 20, color: '#CE6302' }}>Misty Rock Resort</Text>
                    <Text numberOfLines={2} ellipsizeMode='tail' style={{ fontSize: 13, color: '#CE6302', maxWidth: 220 }}>Ea non tempor et laborum proident laborum, Ea non tempor et laborum proident laborum </Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={{ justifyContent: 'center', width: 40, height: 40, elevation: 6, backgroundColor: '#FFBC80', borderRadius: 10, alignSelf: 'center' }}>
                  <Icon
                    type="feather"
                    name='x'
                    color={'#FFFF'}
                    size={30}
                    iconStyle={{ al: 'center' }}
                  />
                </TouchableOpacity>
              </View>

              :

              <View style={{ flexDirection: 'row', backgroundColor: '#FFE1C6', elevation: 3, borderRadius: 20, width: 360, padding: 10, height: 'auto', margin: 5, paddingBottom: 5 }}>
                <View style={{ justifyContent: 'center' }}>
                  <Icon
                    type="feather"
                    name='map-pin'
                    color={'#FF9F45'}
                    size={60}
                    iconStyle={{ al: 'center' }}
                  />
                </View>
                <View style={{ margin: 10 }}>
                  <TouchableOpacity style={{ marginRight: -10, height: 'auto' }} onPress={visibility}>
                    <Text style={{ fontSize: 20, color: '#CE6302' }}>Misty Rock Resort</Text>
                    <Text style={{ fontSize: 13, color: '#CE6302', maxWidth: 210 }}> Ea non tempor et laborum proident laborum, Ea non tempor et laborum proident laborum, proident laborum,proident laborum.proident laborumproident laborum.,proident laborum,proident laborumproident laborum </Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={{ justifyContent: 'center', width: 40, height: 40, elevation: 6, backgroundColor: '#FFBC80', borderRadius: 10, alignSelf: 'center' }}>
                  <Icon
                    type="feather"
                    name='x'
                    color={'#FFFF'}
                    size={30}
                    iconStyle={{ al: 'center' }}
                  />
                </TouchableOpacity>
              </View>
          }
        </ScrollView>
      </View>
    </View>
  )
}