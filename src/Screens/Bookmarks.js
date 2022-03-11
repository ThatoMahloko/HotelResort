import { Text, View, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import { styles } from '../../assets/styles/styles'
import { FAB, Icon, Card } from 'react-native-elements'
import React from 'react'

const Bookmarks = ({ navigation }) => {
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
        <Text style={{ right: '50%', fontFamily: 'Roboto_300Light' }}>Bookmarks</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', bottom: '-6%', left: '1%', marginBottom: 25 }} >
        <View style={styles.homeFlterInput}>
          <TextInput style={{ width: '80%' }} />
          <Icon name='search' type='material' size={45} color='#FFBC80' />
        </View>
        <Card
          containerStyle={{ height: 60, width: 60, borderRadius: 20, bottom: '2%', backgroundColor: '#FFBC80', elevation: 8 }}
        >
          <Icon name='filter' type='font-awesome' size={30} color='#FFFF' />
        </Card>
      </View>
      <ScrollView horizontal={false} contentContainerStyle={{ top: 10, width: 370, justifyContent: 'center', alignSelf: 'center' }}>
        <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#FFE1C6', elevation: 3, borderRadius: 20, width: 350, padding: 10, height: 130, margin: 5 }}>
          <Image style={styles.popularCalrdImage}
            source={{
              uri:
                'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
            }} />

          <View style={styles.popularcardImageTextContent}>
            <Text style={{ fontFamily: 'Roboto_300Light', color: '#CE6302', fontSize: 20 }}>Misty Rock Resort</Text>
            <View style={styles.popularCardIcon}>
              <Icon
                type="feather"
                name='map-pin'
                color={'#FFFF'}
                size={30}
                iconStyle={{ al: 'center' }}
              />
              <Text style={{ fontFamily: 'Roboto_300Light', color: '#FF9F45', fontSize: 20 }}> K-Z-N</Text>
              <TouchableOpacity style={{ justifyContent: 'center', width: 40, height: 40, elevation: 6, backgroundColor: '#FFBC80', borderRadius: 10, alignSelf: 'center', left: '80%' }}>
                <Icon
                  type="feather"
                  name='trash'
                  color={'#FFFF'}
                  size={30}
                  iconStyle={{ al: 'center' }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#FFE1C6', elevation: 3, borderRadius: 20, width: 350, padding: 10, height: 130, margin: 5 }}>
          <Image style={styles.popularCalrdImage}
            source={{
              uri:
                'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
            }} />

          <View style={styles.popularcardImageTextContent}>
            <Text style={{ fontFamily: 'Roboto_300Light', color: '#CE6302', fontSize: 20 }}>Misty Rock Resort</Text>
            <View style={styles.popularCardIcon}>
              <Icon
                type="feather"
                name='map-pin'
                color={'#FFFF'}
                size={30}
                iconStyle={{ al: 'center' }}
              />
              <Text style={{ fontFamily: 'Roboto_300Light', color: '#FF9F45', fontSize: 20 }}> K-Z-N</Text>
              <TouchableOpacity style={{ justifyContent: 'center', width: 40, height: 40, elevation: 6, backgroundColor: '#FFBC80', borderRadius: 10, alignSelf: 'center', left: '80%' }}>
                <Icon
                  type="feather"
                  name='trash'
                  color={'#FFFF'}
                  size={30}
                  iconStyle={{ al: 'center' }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#FFE1C6', elevation: 3, borderRadius: 20, width: 350, padding: 10, height: 130, margin: 5 }}>
          <Image style={styles.popularCalrdImage}
            source={{
              uri:
                'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
            }} />

          <View style={styles.popularcardImageTextContent}>
            <Text style={{ fontFamily: 'Roboto_300Light', color: '#CE6302', fontSize: 20 }}>Misty Rock Resort</Text>
            <View style={styles.popularCardIcon}>
              <Icon
                type="feather"
                name='map-pin'
                color={'#FFFF'}
                size={30}
                iconStyle={{ al: 'center' }}
              />
              <Text style={{ fontFamily: 'Roboto_300Light', color: '#FF9F45', fontSize: 20 }}> K-Z-N</Text>
              <TouchableOpacity style={{ justifyContent: 'center', width: 40, height: 40, elevation: 6, backgroundColor: '#FFBC80', borderRadius: 10, alignSelf: 'center', left: '80%' }}>
                <Icon
                  type="feather"
                  name='trash'
                  color={'#FFFF'}
                  size={30}
                  iconStyle={{ al: 'center' }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#FFE1C6', elevation: 3, borderRadius: 20, width: 350, padding: 10, height: 130, margin: 5 }}>
          <Image style={styles.popularCalrdImage}
            source={{
              uri:
                'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
            }} />

          <View style={styles.popularcardImageTextContent}>
            <Text style={{ fontFamily: 'Roboto_300Light', color: '#CE6302', fontSize: 20 }}>Misty Rock Resort</Text>
            <View style={styles.popularCardIcon}>
              <Icon
                type="feather"
                name='map-pin'
                color={'#FFFF'}
                size={30}
                iconStyle={{ al: 'center' }}
              />
              <Text style={{ fontFamily: 'Roboto_300Light', color: '#FF9F45', fontSize: 20 }}> K-Z-N</Text>
              <TouchableOpacity style={{ justifyContent: 'center', width: 40, height: 40, elevation: 6, backgroundColor: '#FFBC80', borderRadius: 10, alignSelf: 'center', left: '80%' }}>
                <Icon
                  type="feather"
                  name='trash'
                  color={'#FFFF'}
                  size={30}
                  iconStyle={{ al: 'center' }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#FFE1C6', elevation: 3, borderRadius: 20, width: 350, padding: 10, height: 130, margin: 5 }}>
          <Image style={styles.popularCalrdImage}
            source={{
              uri:
                'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
            }} />

          <View style={styles.popularcardImageTextContent}>
            <Text style={{ fontFamily: 'Roboto_300Light', color: '#CE6302', fontSize: 20 }}>Misty Rock Resort</Text>
            <View style={styles.popularCardIcon}>
              <Icon
                type="feather"
                name='map-pin'
                color={'#FFFF'}
                size={30}
                iconStyle={{ al: 'center' }}
              />
              <Text style={{ fontFamily: 'Roboto_300Light', color: '#FF9F45', fontSize: 20 }}> K-Z-N</Text>
              <TouchableOpacity style={{ justifyContent: 'center', width: 40, height: 40, elevation: 6, backgroundColor: '#FFBC80', borderRadius: 10, alignSelf: 'center', left: '80%' }}>
                <Icon
                  type="feather"
                  name='trash'
                  color={'#FFFF'}
                  size={30}
                  iconStyle={{ al: 'center' }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#FFE1C6', elevation: 3, borderRadius: 20, width: 350, padding: 10, height: 130, margin: 5 }}>
          <Image style={styles.popularCalrdImage}
            source={{
              uri:
                'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
            }} />

          <View style={styles.popularcardImageTextContent}>
            <Text style={{ fontFamily: 'Roboto_300Light', color: '#CE6302', fontSize: 20 }}>Misty Rock Resort</Text>
            <View style={styles.popularCardIcon}>
              <Icon
                type="feather"
                name='map-pin'
                color={'#FFFF'}
                size={30}
                iconStyle={{ al: 'center' }}
              />
              <Text style={{ fontFamily: 'Roboto_300Light', color: '#FF9F45', fontSize: 20 }}> K-Z-N</Text>
              <TouchableOpacity style={{ justifyContent: 'center', width: 40, height: 40, elevation: 6, backgroundColor: '#FFBC80', borderRadius: 10, alignSelf: 'center', left: '80%' }}>
                <Icon
                  type="feather"
                  name='trash'
                  color={'#FFFF'}
                  size={30}
                  iconStyle={{ al: 'center' }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#FFE1C6', elevation: 3, borderRadius: 20, width: 350, padding: 10, height: 130, margin: 5 }}>
          <Image style={styles.popularCalrdImage}
            source={{
              uri:
                'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
            }} />

          <View style={styles.popularcardImageTextContent}>
            <Text style={{ fontFamily: 'Roboto_300Light', color: '#CE6302', fontSize: 20 }}>Misty Rock Resort</Text>
            <View style={styles.popularCardIcon}>
              <Icon
                type="feather"
                name='map-pin'
                color={'#FFFF'}
                size={30}
                iconStyle={{ al: 'center' }}
              />
              <Text style={{ fontFamily: 'Roboto_300Light', color: '#FF9F45', fontSize: 20 }}> K-Z-N</Text>
              <TouchableOpacity style={{ justifyContent: 'center', width: 40, height: 40, elevation: 6, backgroundColor: '#FFBC80', borderRadius: 10, alignSelf: 'center', left: '80%' }}>
                <Icon
                  type="feather"
                  name='trash'
                  color={'#FFFF'}
                  size={30}
                  iconStyle={{ al: 'center' }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#FFE1C6', elevation: 3, borderRadius: 20, width: 350, padding: 10, height: 130, margin: 5 }}>
          <Image style={styles.popularCalrdImage}
            source={{
              uri:
                'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
            }} />

          <View style={styles.popularcardImageTextContent}>
            <Text style={{ fontFamily: 'Roboto_300Light', color: '#CE6302', fontSize: 20 }}>Misty Rock Resort</Text>
            <View style={styles.popularCardIcon}>
              <Icon
                type="feather"
                name='map-pin'
                color={'#FFFF'}
                size={30}
                iconStyle={{ al: 'center' }}
              />
              <Text style={{ fontFamily: 'Roboto_300Light', color: '#FF9F45', fontSize: 20 }}> K-Z-N</Text>
              <TouchableOpacity style={{ justifyContent: 'center', width: 40, height: 40, elevation: 6, backgroundColor: '#FFBC80', borderRadius: 10, alignSelf: 'center', left: '80%' }}>
                <Icon
                  type="feather"
                  name='trash'
                  color={'#FFFF'}
                  size={30}
                  iconStyle={{ al: 'center' }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#FFE1C6', elevation: 3, borderRadius: 20, width: 350, padding: 10, height: 130, margin: 5 }}>
          <Image style={styles.popularCalrdImage}
            source={{
              uri:
                'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
            }} />

          <View style={styles.popularcardImageTextContent}>
            <Text style={{ fontFamily: 'Roboto_300Light', color: '#CE6302', fontSize: 20 }}>Misty Rock Resort</Text>
            <View style={styles.popularCardIcon}>
              <Icon
                type="feather"
                name='map-pin'
                color={'#FFFF'}
                size={30}
                iconStyle={{ al: 'center' }}
              />
              <Text style={{ fontFamily: 'Roboto_300Light', color: '#FF9F45', fontSize: 20 }}> K-Z-N</Text>
              <TouchableOpacity style={{ justifyContent: 'center', width: 40, height: 40, elevation: 6, backgroundColor: '#FFBC80', borderRadius: 10, alignSelf: 'center', left: '80%' }}>
                <Icon
                  type="feather"
                  name='trash'
                  color={'#FFFF'}
                  size={30}
                  iconStyle={{ al: 'center' }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#FFE1C6', elevation: 3, borderRadius: 20, width: 350, padding: 10, height: 130, margin: 5 }}>
          <Image style={styles.popularCalrdImage}
            source={{
              uri:
                'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
            }} />

          <View style={styles.popularcardImageTextContent}>
            <Text style={{ fontFamily: 'Roboto_300Light', color: '#CE6302', fontSize: 20 }}>Misty Rock Resort</Text>
            <View style={styles.popularCardIcon}>
              <Icon
                type="feather"
                name='map-pin'
                color={'#FFFF'}
                size={30}
                iconStyle={{ al: 'center' }}
              />
              <Text style={{ fontFamily: 'Roboto_300Light', color: '#FF9F45', fontSize: 20 }}> K-Z-N</Text>
              <TouchableOpacity style={{ justifyContent: 'center', width: 40, height: 40, elevation: 6, backgroundColor: '#FFBC80', borderRadius: 10, alignSelf: 'center', left: '80%' }}>
                <Icon
                  type="feather"
                  name='trash'
                  color={'#FFFF'}
                  size={30}
                  iconStyle={{ al: 'center' }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#FFE1C6', elevation: 3, borderRadius: 20, width: 350, padding: 10, height: 130, margin: 5 }}>
          <Image style={styles.popularCalrdImage}
            source={{
              uri:
                'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
            }} />

          <View style={styles.popularcardImageTextContent}>
            <Text style={{ fontFamily: 'Roboto_300Light', color: '#CE6302', fontSize: 20 }}>Misty Rock Resort</Text>
            <View style={styles.popularCardIcon}>
              <Icon
                type="feather"
                name='map-pin'
                color={'#FFFF'}
                size={30}
                iconStyle={{ al: 'center' }}
              />
              <Text style={{ fontFamily: 'Roboto_300Light', color: '#FF9F45', fontSize: 20 }}> K-Z-N</Text>
              <TouchableOpacity style={{ justifyContent: 'center', width: 40, height: 40, elevation: 6, backgroundColor: '#FFBC80', borderRadius: 10, alignSelf: 'center', left: '80%' }}>
                <Icon
                  type="feather"
                  name='trash'
                  color={'#FFFF'}
                  size={30}
                  iconStyle={{ al: 'center' }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default Bookmarks