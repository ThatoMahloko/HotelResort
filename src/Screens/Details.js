import { View, Text, TextInput, Image, SafeAreaView, ImageBackground, Animated, useWindowDimensions, ScrollView, TouchableOpacity, Share } from 'react-native'
import { Avatar, Card, Icon, FAB, Button, Badge, ListItem } from 'react-native-elements'
import { styles } from '../../assets/styles/styles'
import { db } from '../../config/firebase'
import React from 'react'

const Details = ({ navigation, route }) => {
    const [visible, setVisible] = React.useState(false);
    const [topImage, setTopImage] = React.useState(route.params.images[4]);
    const [shareUrl, setShareUrl] = React.useState()
    const [toggleDetail, setToggleDetail] = React.useState(false)
    const [paddingBottomButtons, setPaddingBottomButttons] = React.useState(20)
    const [detailButtonText, setDetailButtonText] = React.useState("Detail")
    const [toggleReviewForm, setToggleReviewForm] = React.useState(false)
    const [disabledDetail, setDisabledDetail] = React.useState(false)
    const [disabledReview, setDisabledReview] = React.useState(false)
    const [disabledFascilities, setDisabledFascilities] = React.useState(false)
    const [toggleFascilities, setToggleFascilities] = React.useState(false)
    const [document, setDocument] = React.useState([])
    const [documentObject, setDocumentObject] = React.useState([])

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

    React.useEffect(() => {
        console.log(route.params.url)
        setShareUrl(route.params.url)
    },[])

    function toggleDetails() {
        if (toggleDetail == false && paddingBottomButtons == 0 && detailButtonText == "Detail" && disabledFascilities == false && disabledReview == false) {
            setToggleDetail(true)
            setPaddingBottomButttons(20)
            setDetailButtonText("Less Detail")
            setDisabledFascilities(true)
            setDisabledReview(true)
        } else {
            setToggleDetail(false)
            setPaddingBottomButttons(0)
            setDetailButtonText("Detail")
            setDisabledFascilities(false)
            setDisabledReview(false)
        }


    }
    function toggleReviewForm_() {
        if (toggleReviewForm == false && disabledDetail == false && disabledFascilities == false) {
            setToggleReviewForm(true)
            setDisabledDetail(true)
            setDisabledFascilities(true)
        } else {
            setToggleReviewForm(false)
            setDisabledDetail(false)
            setDisabledFascilities(false)
        }

    }

    function togglFascilities() {
        if (disabledDetail == false && disabledReview == false && toggleFascilities == false) {
            setDisabledDetail(true)
            setDisabledReview(true)
            setToggleFascilities(true)
        } else {
            setDisabledDetail(false)
            setDisabledReview(false)
            setToggleFascilities(false)
        }
    }

    React.useEffect(() => {
        db.collection('Hotels').doc(route.params.id)
            .get().then((doc) => {
                if (doc.exists) {
                    setDocument(doc.data())
                    console.log(doc.data())
                } else {
                    console.log("No such document")
                }
            }).catch((error) => {
                console.log('Error getting document')
            })

        setDocumentObject(route.params)                    
        console.log(documentObject)

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
                    <View style={{ flexDirection: 'row', left: '35%', bottom: '18%' }}>
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
            {
                toggleReviewForm == false ?
                    <>
                        {
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
                        }
                    </>
                    :
                    <></>
            }
            <View style={{ flexDirection: 'row', top: '14%', right: '3%', paddingBottom: 50 }}>
                <Button
                    disabled={disabledDetail}
                    title={detailButtonText}
                    containerStyle={{
                        width: 120,
                        marginHorizontal: 50,
                        marginVertical: 10,
                        left: '200%',
                        elevation: 6
                    }}
                    titleStyle={{ fontFamily: 'Roboto_300Light' }}
                    buttonStyle={{ backgroundColor: '#FF9F45' }}
                    onPress={toggleDetails}
                />
                <Button
                    disabled={disabledReview}
                    title={'Review'}
                    containerStyle={{
                        width: 80,
                        marginHorizontal: 50,
                        marginVertical: 10,
                        left: '50%',
                        elevation: 6
                    }}
                    titleStyle={{ fontFamily: 'Roboto_300Light', color: '#FF9F45' }}
                    buttonStyle={{ backgroundColor: '#FFE1C6' }}
                    onPress={toggleReviewForm_}
                />
                <Button
                    disabled={disabledFascilities}
                    title={'Fascilities'}
                    containerStyle={{
                        width: 120,
                        marginHorizontal: 50,
                        marginVertical: 10,
                        right: '100%',
                        elevation: 6
                    }}
                    titleStyle={{ fontFamily: 'Roboto_300Light', color: '#FFFF' }}
                    buttonStyle={{ backgroundColor: '#FC4F4F' }}
                    onPress={togglFascilities}
                />
            </View>

            {
                toggleFascilities == false ?
                    <>

                        {
                            toggleReviewForm == false ?

                                <>
                                    {
                                        toggleDetail == false ?
                                            <>
                                                {
                                                    visible == false ?

                                                        <ScrollView horizontal={false} style={{ top: '1%' }}>
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
                                                        <ScrollView horizontal={false} style={{ top: '1%', marginBottom: '5.5%' }}>
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
                                            </>
                                            :
                                            <>
                                                <View style={{ flexDirection: 'row', right: '20%' }}>
                                                    <Text style={{ fontFamily: 'Roboto_700Bold', fontSize: 20 }}>4.5</Text>
                                                    <Icon
                                                        name='star'
                                                        type='ant-desig'
                                                        size={27}
                                                    />
                                                </View>

                                                <ScrollView horizontal={false} contentContainerStyle={{ right: '0.8%' }}>
                                                    <ListItem>
                                                        <View style={{ flexDirection: 'row', justifyContent: 'center', left: '42%' }}>
                                                            <View style={{ backgroundColor: "#FFE1C6", height: 60, width: 60, justifyContent: 'center', borderRadius: 40, right: '255%' }}>
                                                                <Icon
                                                                    // reverse
                                                                    name='user'
                                                                    type='evilicon'
                                                                    color="#FF9F45"
                                                                    size={60}
                                                                />
                                                            </View>
                                                            <View style={{ right: '250%', justifyContent: 'center' }}>
                                                                <Text style={{ fontFamily: 'Roboto_700Bold' }}>Steve M.</Text>
                                                                <Text numberOfLines={1} ellipsizeMode={'tail'} style={{ fontFamily: 'Roboto_300Light', width: '75%' }}>sswddewe wewefw wefefef wefef weffe wefefds</Text>
                                                                <TouchableOpacity onPress={toggleTextVisibilty}>
                                                                    <Text style={{ fontFamily: 'Roboto_300Light', color: '#FF9F45' }}>
                                                                        Read More...
                                                                    </Text>
                                                                </TouchableOpacity>
                                                            </View>
                                                        </View>
                                                    </ListItem>

                                                    <ListItem>
                                                        <View style={{ flexDirection: 'row', top: '15%', justifyContent: 'center', left: '42%' }}>
                                                            <View style={{ backgroundColor: "#FFE1C6", height: 60, width: 60, justifyContent: 'center', borderRadius: 40, right: '255%' }}>
                                                                <Icon
                                                                    // reverse
                                                                    name='user'
                                                                    type='evilicon'
                                                                    color="#FF9F45"
                                                                    size={60}
                                                                />
                                                            </View>
                                                            <View style={{ right: '250%', justifyContent: 'center' }}>
                                                                <Text style={{ fontFamily: 'Roboto_700Bold' }}>Steve M.</Text>
                                                                <Text numberOfLines={1} ellipsizeMode={'tail'} style={{ fontFamily: 'Roboto_300Light', width: '75%' }}>sswddewe wewefw wefefef wefef weffe wefefds</Text>
                                                                <TouchableOpacity onPress={toggleTextVisibilty}>
                                                                    <Text style={{ fontFamily: 'Roboto_300Light', color: '#FF9F45' }}>
                                                                        Read More...
                                                                    </Text>
                                                                </TouchableOpacity>
                                                            </View>
                                                        </View>
                                                    </ListItem>
                                                    <ListItem>
                                                        <View style={{ flexDirection: 'row', top: '15%', justifyContent: 'center', left: '42%' }}>
                                                            <View style={{ backgroundColor: "#FFE1C6", height: 60, width: 60, justifyContent: 'center', borderRadius: 40, right: '255%' }}>
                                                                <Icon
                                                                    // reverse
                                                                    name='user'
                                                                    type='evilicon'
                                                                    color="#FF9F45"
                                                                    size={60}
                                                                />
                                                            </View>
                                                            <View style={{ right: '250%', justifyContent: 'center' }}>
                                                                <Text style={{ fontFamily: 'Roboto_700Bold' }}>Steve M.</Text>
                                                                <Text numberOfLines={1} ellipsizeMode={'tail'} style={{ fontFamily: 'Roboto_300Light', width: '75%' }}>sswddewe wewefw wefefef wefef weffe wefefds</Text>
                                                                <TouchableOpacity onPress={toggleTextVisibilty}>
                                                                    <Text style={{ fontFamily: 'Roboto_300Light', color: '#FF9F45' }}>
                                                                        Read More...
                                                                    </Text>
                                                                </TouchableOpacity>
                                                            </View>
                                                        </View>
                                                    </ListItem>
                                                    <ListItem bottomDivider style={{ marginTop: '1%' }} />
                                                </ScrollView>
                                            </>
                                    }
                                </>
                                :
                                <View style={{ top: '5%' }}>
                                    <View style={{ flexDirection: 'row', borderColor: '#FF9F45', borderWidth: 1, borderRadius: 20, width: 340, height: 50, padding: 10, bottom: '10%', marginBottom: '3%' }}>
                                        <TextInput placeholder='First Name' keyboardType='email-address' style={{ width: '85%', marginLeft: '5%' }} />
                                    </View>
                                    <View style={{ flexDirection: 'row', borderColor: '#FF9F45', borderWidth: 1, borderRadius: 20, width: 340, height: 50, padding: 10, bottom: '10%', marginBottom: '3%' }}>
                                        <TextInput placeholder='Last initial' keyboardType='email-address' style={{ width: '85%', marginLeft: '5%' }} />
                                    </View>
                                    <View style={{ flexDirection: 'row', borderColor: '#FF9F45', borderWidth: 1, borderRadius: 20, width: 340, height: 85, padding: 10, bottom: '10%', marginBottom: '3%' }}>
                                        <TextInput multiline maxLength={100} placeholder='Review' keyboardType='email-address' style={{ width: '85%', marginLeft: '5%' }} />
                                    </View>
                                </View>
                        }
                    </>

                    :
                    <View style={{ height: 140, width: '90%', elevation: 6, backgroundColor: '#FFFF', borderRadius: 20, justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>

                        <View style={{ alignItems: 'center', margin: 10 }}>
                            <Icon name='bed'
                                type='font-awesome' />
                            <Text>4 beds</Text>
                        </View>

                        <View style={{ alignItems: 'center', margin: 10 }}>
                            <Icon name='shower'
                                type='font-awesome' />
                            <Text>shower</Text>
                        </View>

                        <View style={{ alignItems: 'center', margin: 10 }}>
                            <Icon name='wifi'
                                type='font-awesome' />
                            <Text>wifi/5G</Text>
                        </View>

                        <View style={{ alignItems: 'center', margin: 10 }}>
                            <Icon name='pool'
                                type='ant-desig' />
                            <Text>pool</Text>
                        </View>

                        <View style={{ alignItems: 'center', margin: 10 }}>
                            <Icon name='poop'
                                type='font-awesome' />
                            <Text>dining</Text>
                        </View>

                    </View>
            }

            <View style={{ flexDirection: 'row', top: '3%' }}>{/*top: '10%'*/}
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
                    onPress={() => navigation.navigate("Booking", documentObject)}
                />
            </View>
        </ScrollView>
    )
}

export default Details
