import { View, Text, TextInput, Image, SafeAreaView, ImageBackground, Animated, useWindowDimensions, ScrollView, TouchableOpacity } from 'react-native'
import { Avatar, Card, Icon, Button, Divider, Header } from 'react-native-elements'
import { styles } from '../../assets/styles/styles'
import ReactPagerView from 'react-native-pager-view'
import React, { useRef } from 'react'
import { db } from '../../config/firebase'
import Oops from './Oops'
import { Use } from 'react-native-svg'

export default function Home({ navigation }) {
    const [filterValue, setFilterValue] = React.useState("")
    const [hotelData, setHotelData] = React.useState([])
    const [viewAllOurProperties, setViewAllOurProperties] = React.useState(false)
    const [viewAllPopularProperties, setViewAllPopularProperties] = React.useState(false)
    const [searchInput, setSearchInput] = React.useState()
    const [textSearch, setTextSearch] = React.useState(false)
    const [test, setTest] = React.useState()
var yhotel
    React.useEffect(() => {
        db.collection('Hotels').onSnapshot((snapshot) => {
            const dis = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setHotelData(dis);
            console.log(hotelData)
        });
    }, [])


    function toggleVeiwAll() {
        if (viewAllOurProperties == false) {
            setViewAllOurProperties(true)
        } else {
            setViewAllOurProperties(false)
        }
    }

    function toggleViewPopular() {
        if (viewAllPopularProperties == false) {
            setViewAllPopularProperties(true)
        } else {
            setViewAllPopularProperties(false)
        }
    }

    function clearFilter() {
        setFilterValue("")
    }
    {
    var usey
    
    usey == searchInput;
    
    yhotel !== "";
    }


    function startSearch(saerch, hdata) {
        // console.log(searchInput)


        if (saerch == hdata) {

            if (textSearch == false) {
                setTextSearch(true)

            }

            else {

            }
        }

        else {

            navigation.navigate('Oops', hdata)

        }
    }
    var king = 'KZN';


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
                    <TextInput style={{ width: '80%' }} onChangeText={(searchInput) => setSearchInput(searchInput)} placeholder={"Search By Province"} />
                    <Icon name='search' type='material' size={45} color='#FFBC80' />
                </View>


                <TouchableOpacity onPress={function () {
                    startSearch(searchInput, yhotel)
                }}>
                    <Card
                        containerStyle={{ height: 60, width: 60, borderRadius: 20, bottom: '2%', backgroundColor: '#FFBC80', elevation: 8 }}
                    >
                        <Icon name='filter' type='font-awesome' size={30} color='#FFFF' />
                    </Card>
                </TouchableOpacity>
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
                        <TouchableOpacity style={{ width: 64, height: 64, }} onPress={() => setFilterValue('KZN')} />
                    </ImageBackground>
                    <Text style={{ bottom: '120%', alignSelf: 'center' }}>KZN</Text>
                </View>
                <View>
                    <ImageBackground
                        style={{ width: 64, height: 64, borderRadius: 32, marginLeft: '5%', bottom: '120%', alignSelf: 'center', }}
                        source={require('../../assets/images/avatarCity/ncAvatar.jpg')}
                        imageStyle={{ borderRadius: 32 }}
                    >
                        <TouchableOpacity style={{ width: 64, height: 64, }} onPress={() => setFilterValue('NC')} />
                    </ImageBackground>
                    <Text style={{ bottom: '120%', alignSelf: 'center' }}>NC</Text>
                </View>
            </View>

            {
                textSearch == false ?
                    <>
                        {
                            // hotelData.filter(province => province.state == filterValue)
                            filterValue == "" ?


                                <>
                                    {
                                        viewAllPopularProperties == false ?
                                            <>
                                                {
                                                    viewAllOurProperties == false ?
                                                        <>

                                                            {
                                                                < View style={{ flex: 1, height: 300, borderRadius: 20 }}>

                                                                    <TouchableOpacity style={styles.propertyIntroHeadingContainer} onPress={toggleVeiwAll}>
                                                                        <Text style={styles.propertyIntroHeading}>Our Properties</Text>
                                                                        <Text style={styles.propertyIntroHeadingViewAll}>View All</Text>
                                                                    </TouchableOpacity>

                                                                    <ReactPagerView style={styles.pagerView} initialPage={0} transitionStyle={'curl'}>
                                                                        {
                                                                            hotelData.map((data, k) => {
                                                                                return (
                                                                                    <TouchableOpacity style={{ height: 280 }} onPress={() => navigation.navigate('Details', data)} key={data.id}>
                                                                                        <Card containerStyle={{ borderRadius: 20, margin: 10, height: 270 }} key={1}>
                                                                                            <Card.Image style={{ height: 180, borderRadius: 20 }}
                                                                                                source={{
                                                                                                    uri:
                                                                                                        data.images[0],
                                                                                                }}
                                                                                            />
                                                                                            <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.cardCitytext}>{data.name}</Text>
                                                                                            <View style={styles.cityCardDetails}>
                                                                                                <Icon
                                                                                                    type="entypo"
                                                                                                    name='location-pin'
                                                                                                    color={'#FF9F45'}
                                                                                                />
                                                                                                <Text style={styles.cityName}>{data.state}</Text>
                                                                                            </View>
                                                                                        </Card>
                                                                                    </TouchableOpacity>
                                                                                )
                                                                            })
                                                                        }
                                                                    </ReactPagerView>
                                                                </View>
                                                            }

                                                            <TouchableOpacity style={{ flexDirection: 'row', right: '14%', top: '45%' }} onPress={toggleViewPopular}>
                                                                <Text style={styles.popularLcationsHeading}>Popular</Text>
                                                            </TouchableOpacity>

                                                            <ScrollView horizontal style={{ top: '45%' }} bouncesZoom={true}>
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
                                                        </>
                                                        :
                                                        <>
                                                            <TouchableOpacity style={styles.propertyIntroHeadingContainer} onPress={toggleVeiwAll}>
                                                                <Text style={styles.propertyIntroHeading}>Our Properties</Text>
                                                                <Text style={styles.propertyIntroHeadingViewAll}>View All</Text>
                                                            </TouchableOpacity>
                                                            <ScrollView horizontal={false} style={{ marginTop: 20 }}>
                                                                {
                                                                    hotelData.map((data, k) => {
                                                                        return (
                                                                            <TouchableOpacity style={{ height: 280 }} onPress={() => navigation.navigate('Details', data)} key={data.id}>
                                                                                <Card containerStyle={{ borderRadius: 20, margin: 10, height: 270 }} key={1}>
                                                                                    <Card.Image style={{ height: 180, borderRadius: 20 }}
                                                                                        source={{
                                                                                            uri:
                                                                                                data.images[0],
                                                                                        }}
                                                                                    />
                                                                                    <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.cardCitytext}>{data.name}</Text>
                                                                                    <View style={styles.cityCardDetails}>
                                                                                        <Icon
                                                                                            type="entypo"
                                                                                            name='location-pin'
                                                                                            color={'#FF9F45'}
                                                                                        />
                                                                                        <Text style={styles.cityName}>{data.state}</Text>
                                                                                    </View>
                                                                                </Card>
                                                                            </TouchableOpacity>
                                                                        )
                                                                    })
                                                                }
                                                            </ScrollView>
                                                        </>
                                                }

                                            </>
                                            :
                                            <>
                                                <TouchableOpacity style={styles.propertyIntroHeadingContainer} onPress={toggleViewPopular}>
                                                    <Text style={styles.propertyIntroHeading}>Our Properties</Text>
                                                    <Text style={styles.propertyIntroHeadingViewAll}>View All</Text>
                                                </TouchableOpacity>

                                                <ScrollView horizontal={false} style={{ top: '3%' }} bouncesZoom={true}>
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
                                            </>
                                    }
                                </>
                                :
                                <>
                                    <Button
                                        title={'Clear Filter'}
                                        containerStyle={{
                                            width: 120,
                                            marginHorizontal: 50,
                                            marginVertical: 10,
                                            elevation: 6,
                                            top: '3%'
                                        }}
                                        titleStyle={{ fontFamily: 'Roboto_300Light' }}
                                        buttonStyle={{ backgroundColor: '#FF9F45' }}
                                        onPress={clearFilter}
                                    />
                                    <ScrollView horizontal={false} style={{ top: '2%' }}>
                                        {
                                            hotelData.filter(province => province.state == filterValue)
                                                .map((hotel) => {
                                                    return (
                                                        <TouchableOpacity style={{ height: 280, top: '5%', marginBottom: 10 }} onPress={() => navigation.navigate('Details', hotel)} key={hotel.id}>
                                                            <Card containerStyle={{ borderRadius: 20, margin: 10, height: 270 }} key={1}>
                                                                <Card.Image style={{ height: 180, borderRadius: 20 }}
                                                                    source={{
                                                                        uri:
                                                                            hotel.images[0],
                                                                    }}
                                                                />
                                                                <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.cardCitytext}>{hotel.name}</Text>
                                                                <View style={styles.cityCardDetails}>
                                                                    <Icon
                                                                        type="entypo"
                                                                        name='location-pin'
                                                                        color={'#FF9F45'}
                                                                    />
                                                                    <Text style={styles.cityName}>{hotel.state}</Text>
                                                                </View>
                                                            </Card>
                                                        </TouchableOpacity>
                                                    )
                                                })
                                        }

                                        <Divider width={5} style={{ marginTop: '20%' }} />
                                    </ScrollView>
                                </>
                        }
                    </>

                    :

                    <>
                        <Button
                            title={'Clear Filter'}
                            containerStyle={{
                                width: 120,
                                marginHorizontal: 50,
                                marginVertical: 10,
                                elevation: 6,
                                top: '3%'
                            }}
                            titleStyle={{ fontFamily: 'Roboto_300Light' }}
                            buttonStyle={{ backgroundColor: '#FF9F45' }}
                            onPress={() => setTextSearch(false)}
                        />
                        <ScrollView horizontal={false} style={{ top: '2%' }}>
                            {
                                hotelData.filter(province => province.state == searchInput)
                                    .map((data) => {
                                        return (
                                            (data == data) == true ?
                                                <TouchableOpacity style={{ height: 280, top: '5%', marginBottom: 10 }} onPress={() => navigation.navigate('Details', data)} key={data.id}>
                                                    <Card containerStyle={{ borderRadius: 20, margin: 10, height: 270 }} key={1}>
                                                        <Card.Image style={{ height: 180, borderRadius: 20 }}
                                                            source={{
                                                                uri:
                                                                    data.images[0],
                                                            }}
                                                        />
                                                        <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.cardCitytext}>{data.name}</Text>
                                                        <View style={styles.cityCardDetails}>
                                                            <Icon
                                                                type="entypo"
                                                                name='location-pin'
                                                                color={'#FF9F45'}
                                                            />
                                                            <Text style={styles.cityName}>{data.state}</Text>
                                                        </View>
                                                    </Card>

                                                </TouchableOpacity>





                                                :

                                                navigation.navigate("Oops", data)

                                        )
                                    })
                            }

                            <Divider width={5} style={{ marginTop: '20%' }} />
                        </ScrollView>
                    </>
            }

        </View >
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
