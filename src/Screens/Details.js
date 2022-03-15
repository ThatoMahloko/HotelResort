import { View, Text, TextInput, Image, SafeAreaView, ImageBackground, Animated, useWindowDimensions, ScrollView, TouchableOpacity, Share } from 'react-native'
import { Avatar, Card, Icon, FAB, Button, Badge } from 'react-native-elements'
import { styles } from '../../assets/styles/styles'
import React from 'react'

const Details = ({ navigation, route }) => {
    const [visible, setVisible] = React.useState(false);
    const [topImage, setTopImage] = React.useState(route.params.images[4]);
    const [shareUrl, setShareUrl] = React.useState()

    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    shareUrl,
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };

    function toggleTextVisibilty() {
        if (visible == false) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }

    React.useState(() => {
        console.log(route.params.url)
        setShareUrl(route.params.url)
    })

    return (
        <ScrollView horizontal={false} contentContainerStyle={styles.container}>
            <View style={styles.avatars}>
                <FAB
                    visible={true}
                    icon={{ name: 'left', type: 'ant-design', color: '#FF9F45' }}
                    color="white"
                    style={{ right: '35%' }}
                    onPress={() => navigation.goBack()}
                />
                <Text style={{ right: '50%', fontFamily: 'Roboto_300Light' }}>Details</Text>

            </View>
            <ImageBackground
                source={{ uri: topImage }}
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
                    <View style={{ flexDirection: 'row', left: '35%',bottom: '18%'}}>
                        <TouchableOpacity>
                            <Icon
                                size={34}
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
            <View style={styles.homeAvataGroup}>
                <ImageBackground
                    style={{ width: 64, height: 64, borderRadius: 32, marginLeft: '5%', bottom: '22%', alignSelf: 'center', }}
                    source={{ uri: route.params.images[0] }}
                    imageStyle={{ borderRadius: 32 }}
                >
                    <TouchableOpacity style={{ width: 64, height: 64, }} onPress={() => setTopImage(route.params.images[0])} />
                </ImageBackground>
                <ImageBackground
                    style={{ width: 64, height: 64, borderRadius: 32, marginLeft: '5%', bottom: '22%', alignSelf: 'center', }}
                    source={{ uri: route.params.images[1] }}
                    imageStyle={{ borderRadius: 32 }}
                >
                    <TouchableOpacity style={{ width: 64, height: 64, }} onPress={() => setTopImage(route.params.images[1])} />
                </ImageBackground>
                <ImageBackground
                    style={{ width: 64, height: 64, borderRadius: 32, marginLeft: '5%', bottom: '22%', alignSelf: 'center', }}
                    source={{ uri: route.params.images[2] }}
                    imageStyle={{ borderRadius: 32 }}
                >
                    <TouchableOpacity style={{ width: 64, height: 64, }} onPress={() => setTopImage(route.params.images[2])} />
                </ImageBackground>
                <ImageBackground
                    style={{ width: 64, height: 64, borderRadius: 32, marginLeft: '5%', bottom: '22%', alignSelf: 'center', }}
                    source={{ uri: route.params.images[3] }}
                    imageStyle={{ borderRadius: 32 }}
                >
                    <TouchableOpacity style={{ width: 64, height: 64, }} onPress={() => setTopImage(route.params.images[3])} />
                </ImageBackground>
            </View>


            <View style={{ flexDirection: 'row', top: '14%', right: '3%' }}>
                <Button
                    title={'Detail'}
                    containerStyle={{
                        width: 120,
                        marginHorizontal: 50,
                        marginVertical: 10,
                        elevation: 6
                    }}
                    titleStyle={{ fontFamily: 'Roboto_300Light' }}
                    buttonStyle={{ backgroundColor: '#FF9F45' }}
                />
                <Button
                    title={'Review'}
                    containerStyle={{
                        width: 120,
                        marginHorizontal: 50,
                        marginVertical: 10,
                        right: '140%',
                        elevation: 6
                    }}
                    titleStyle={{ fontFamily: 'Roboto_300Light', color: '#FF9F45' }}
                    buttonStyle={{ backgroundColor: '#FFE1C6' }}
                />
            </View>

            {
                visible == false ?

                    <ScrollView horizontal={false} style={{ top: '8%' }}>
                        <Text numberOfLines={7} style={{ fontFamily: 'Roboto_300Light', color: '#8B8B8B' }}>
                            Eae non tempor et laborum proident laborum aliquip tempor aliquip excepteur
                            aliqua culpa in eu. Dolore commodo eu velit commodo id id. Labore proident
                            velit occaecat reprehenderit ullamco aliqua reprehenderit exercitation.
                            nostrud mollit amet. Pariatur deserunt amet exercitation duis
                            Eae non tempor et laborum proident laborum aliquip tempor aliquip excepteur
                            aliqua culpa in eu. Dolore commodo eu velit commodo id id. Labore proident
                            velit occaecat reprehenderit ullamco aliqua reprehenderit exercitation.
                            nostrud mollit amet. Pariatur deserunt amet exercitation duis
                        </Text>
                        <TouchableOpacity onPress={toggleTextVisibilty}>
                            <Text style={{ fontFamily: 'Roboto_300Light', color: '#FF9F45' }}>
                                Read more...
                            </Text>
                        </TouchableOpacity>
                    </ScrollView>
                    :
                    <ScrollView horizontal={false} style={{ top: '8%', marginBottom: '5.5%' }}>
                        <Text style={{ fontFamily: 'Roboto_300Light', color: '#8B8B8B' }}>
                            Eae non tempor et laborum proident laborum aliquip tempor aliquip excepteur
                            aliqua culpa in eu. Dolore commodo eu velit commodo id id. Labore proident
                            velit occaecat reprehenderit ullamco aliqua reprehenderit exercitation.
                            nostrud mollit amet. Pariatur deserunt amet exercitation duis
                            Eae non tempor et laborum proident laborum aliquip tempor aliquip excepteur
                            aliqua culpa in eu. Dolore commodo eu velit commodo id id. Labore proident
                            velit occaecat reprehenderit ullamco aliqua reprehenderit exercitation.
                            nostrud mollit amet. Pariatur deserunt amet exercitation duis
                        </Text>
                        <TouchableOpacity onPress={toggleTextVisibilty}>
                            <Text style={{ fontFamily: 'Roboto_300Light', color: '#FF9F45' }}>
                                Read Less...
                            </Text>
                        </TouchableOpacity>
                    </ScrollView>
            }

            <View style={{ flexDirection: 'row', top: '10%' }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontFamily: 'Roboto_700Bold', color: 'black', fontSize: 20 }}>$410</Text>
                    <Text style={{ fontFamily: 'Roboto_700Bold', color: 'black', fontSize: 20 }}>/Person</Text>
                </View>
                <Button
                    icon={
                        {
                            type: 'font-awsome',
                            name: 'chevron-right',
                            color: 'white'
                        }}
                    iconRight
                    title={'Continue'}
                    containerStyle={{
                        width: 160,
                        marginHorizontal: 50,
                        marginVertical: 10,
                        left: '90%',
                        elevation: 6,
                        bottom: '3%'
                    }}
                    titleStyle={{ fontFamily: 'Roboto_300Light', color: '#FFFF' }}
                    buttonStyle={{ backgroundColor: '#FF9F45' }}
                />
            </View>
        </ScrollView>
    )
}

export default Details
