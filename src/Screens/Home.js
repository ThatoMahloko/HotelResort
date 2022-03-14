import { View, Text, TextInput, Image, SafeAreaView, ImageBackground, Animated, useWindowDimensions, ScrollView, TouchableOpacity } from 'react-native'
import { Avatar, Card, Icon, Fab } from 'react-native-elements'
import { styles } from '../../assets/styles/styles'
import ReactPagerView from 'react-native-pager-view'
import React, { useRef } from 'react'

export default function Home({ navigation }) {
    const [filterValue, setFilterValue] = React.useState()
    return (
        <View style={styles.container}>
            <View style={styles.avatars} >
                <Avatar
                    size={64}
                    rounded
                    source={require('../../assets/images/myPhoto/myPhoto.jpg')}
                    containerStyle={{ marginRight: '5%', elevation: 6 }}
                />
                <Text style={{ fontFamily: 'Roboto_400Regular', fontSize: 18 }}>Hello, User!</Text>
                <Avatar
                    size={40}
                    rounded
                    icon={{ name: 'bell-o', type: 'font-awesome' }}
                    containerStyle={{ backgroundColor: '#FFBC80', marginLeft: '30%' }}
                />
            </View>
            <View style={styles.homeFilterGroup} >
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

            <View style={styles.homeAvataGroup}>

                <View>
                    <ImageBackground
                        style={{ width: 64, height: 64, borderRadius: 32, marginLeft: '5%', bottom: '120%', alignSelf: 'center', }}
                        source={require('../../assets/images/avatarCity/gautengAvatar.jpg')}
                        imageStyle={{ borderRadius: 32 }}
                    >
                        <TouchableOpacity style={{ width: 64, height: 64, }} onPress={() => setFilterValue('Gauteng')} />
                    </ImageBackground>
                    <Text style={{ bottom: '120%', alignSelf: 'center' }}>Gauteng</Text>
                </View>

                <View>
                    <ImageBackground
                        style={{ width: 64, height: 64, borderRadius: 32, marginLeft: '5%', bottom: '120%', alignSelf: 'center', }}
                        source={require('../../assets/images/avatarCity/freeStateAvatar.jpg')}
                        imageStyle={{ borderRadius: 32 }}
                    >
                        <TouchableOpacity style={{ width: 64, height: 64, }} onPress={() => setFilterValue('Free-State')} />
                    </ImageBackground>
                    <Text style={{ bottom: '120%', alignSelf: 'center' }}>Free-State</Text>
                </View>

                <View>
                    <ImageBackground
                        style={{ width: 64, height: 64, borderRadius: 32, marginLeft: '5%', bottom: '120%', alignSelf: 'center', }}
                        source={require('../../assets/images/avatarCity/kznAvatar.jpg')}
                        imageStyle={{ borderRadius: 32 }}
                    >
                        <TouchableOpacity style={{ width: 64, height: 64, }} onPress={() => setFilterValue('K-Z-N')} />
                    </ImageBackground>
                    <Text style={{ bottom: '120%', alignSelf: 'center' }}>K-Z-N</Text>
                </View>
                <View>
                    <ImageBackground
                        style={{ width: 64, height: 64, borderRadius: 32, marginLeft: '5%', bottom: '120%', alignSelf: 'center', }}
                        source={require('../../assets/images/avatarCity/ncAvatar.jpg')}
                        imageStyle={{ borderRadius: 32 }}
                    >
                        <TouchableOpacity style={{ width: 64, height: 64, }} onPress={() => setFilterValue('N-C')} />
                    </ImageBackground>
                    <Text style={{ bottom: '120%', alignSelf: 'center' }}>N-C</Text>
                </View>
            </View>

            <View style={styles.propertyIntroHeadingContainer}>
                <Text style={styles.propertyIntroHeading}>Our Properties</Text>
                <Text style={styles.propertyIntroHeadingViewAll}>View All</Text>
            </View>

            <View style={{ flex: 1, height: 300, borderRadius: 20 }}>
                <ReactPagerView style={styles.pagerView} initialPage={0} transitionStyle={'curl'}>
                    <TouchableOpacity style={{ height: 280 }} onPress={() => navigation.navigate('Details')}>
                        <Card containerStyle={{ borderRadius: 20, margin: 10, height: 270 }} key={1}>
                            <Card.Image style={{ height: 180, borderRadius: 20 }}
                                source={{
                                    uri:
                                        'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
                                }}
                            />
                            <Text style={styles.cardCitytext}>Misty Rock Resort</Text>
                            <View style={styles.cityCardDetails}>
                                <Icon
                                    type="entypo"
                                    name='location-pin'
                                    color={'#FF9F45'}
                                />
                                <Text style={styles.cityName}>City Name</Text>
                            </View>
                        </Card>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: 280 }} onPress={() => navigation.navigate('Details')}>
                        <Card containerStyle={{ borderRadius: 20, margin: 10, height: 270 }} key={2}>
                            <Card.Image style={{ height: 180, borderRadius: 20 }}
                                source={{
                                    uri:
                                        'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
                                }}
                            />
                            <Text style={styles.cardCitytext}>Misty Rock Resort</Text>
                            <View style={styles.cityCardDetails}>
                                <Icon
                                    type="entypo"
                                    name='location-pin'
                                    color={'#FF9F45'}
                                />
                                <Text style={styles.cityName}>City Name</Text>
                            </View>
                        </Card>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: 280 }} onPress={() => navigation.navigate('Details')}>
                        <Card containerStyle={{ borderRadius: 20, margin: 10, height: 270 }} key={3}>
                            <Card.Image style={{ height: 180, borderRadius: 20 }}
                                source={{
                                    uri:
                                        'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
                                }}
                            />
                            <Text style={styles.cardCitytext}>Misty Rock Resort</Text>
                            <View style={styles.cityCardDetails}>
                                <Icon
                                    type="entypo"
                                    name='location-pin'
                                    color={'#FF9F45'}
                                />
                                <Text style={styles.cityName}>City Name</Text>
                            </View>
                        </Card>
                    </TouchableOpacity>
                </ReactPagerView>
            </View>

            <View style={styles.popularPorpertiesGroup}>
                <Text style={styles.popularLcationsHeading}>Popular</Text>
                <Text style={styles.popularLcationsHeadingViewAll}>View All</Text>
            </View>

            <ScrollView horizontal style={styles.popularScrollable} bouncesZoom={true}>
                <View style={styles.popularCard}>
                    <Image style={styles.popularCalrdImage}
                        source={{
                            uri:
                                'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
                        }} />

                    <View style={styles.popularcardImageTextContent}>
                        <Text>Misty Rock Resort</Text>
                        <View style={styles.popularCardIcon}>
                            <Icon
                                type="entypo"
                                name='location-pin'
                                color={'#FF9F45'}
                            />
                            <Text style={styles.popularCardTextContentSubText}>K-Z-N</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.popularCard}>
                    <Image style={styles.popularCalrdImage}
                        source={{
                            uri:
                                'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
                        }} />

                    <View style={styles.popularcardImageTextContent}>
                        <Text>Misty Rock Resort</Text>
                        <View style={styles.popularCardIcon}>
                            <Icon
                                type="entypo"
                                name='location-pin'
                                color={'#FF9F45'}
                            />
                            <Text style={styles.popularCardTextContentSubText}>K-Z-N</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>

        </View>
    )
}


{
    /**
     * 
     *<Icon name='filter' type='font-awesome' size={30} color='#FFFF' />
     *<Icon name='search' type='material' size={36} color='rgba(255,159,69,100)' /> 
     <Icon name='bell-o' type='font-awesome' size={17} color='#FFFF' />
     */
}