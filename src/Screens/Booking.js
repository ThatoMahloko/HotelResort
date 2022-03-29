import { View, Text, ImageBackground, TouchableOpacity, ToastAndroid } from 'react-native'
import { Icon, FAB, Button } from 'react-native-elements'
import { styles } from '../../assets/styles/styles'
import { db, auth } from '../../config/firebase'
import React from 'react'

const Booking = ({ navigation, route }) => {
    const user = auth.currentUser.email
    const [guests, setGuests] = React.useState()
    const [date, setDate] = React.useState(new Date())
    const [open, setOpen] = React.useState(false)
    const [increment, setIncrement] = React.useState(0)
    const [disabledDecrement, setDisabledDecrement] = React.useState(false)
    const [disabledIncrement, setDisabledIncrement] = React.useState(false)

    React.useEffect(() => {
        console.log(route.params)
    }, [])

    function handleBooking() {
        // db.collection('Bokkings').doc(user).set({
        //     hotel: route.params.name,
        //     guest: guests,
        //     check_in: date
        // }).then(() => {
        //     console.log("Document successfully written!");
        // })
        //     .catch((error) => {
        //         console.error("Error writing document: ", error);
        //     });
        navigation.navigate("BookingSuccessFull")
    }

    function add() {
        setIncrement(increment + 1)
        if (increment > 3  && disabledIncrement == false) {
            ToastAndroid.show(
                `⚠️ ${increment} maximum guest! ⚠️`,
                ToastAndroid.BOTTOM
            )
            setDisabledIncrement(true)
            setDisabledDecrement(false)
        } else {
            setDisabledIncrement(false)
        }

    }

    function reduce() {
        setIncrement(increment - 1)

        if (increment < 2 && disabledDecrement == false) {
            ToastAndroid.show(
                `⚠️ please add more than ${increment} guests! ⚠️`,
                ToastAndroid.BOTTOM
            )
            setDisabledDecrement(true)
            setDisabledIncrement(false)
        } else {
            setDisabledDecrement(false)
        }


    }

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
                <Text style={{ right: '50%', fontFamily: 'Roboto_300Light' }}>Booking</Text>

            </View>

            <View style={{ alignItems: 'flex-start', top: '4 %' }}>

                {
                    <>
                        <TouchableOpacity>
                            <Text style={{ fontFamily: 'Roboto_300Light', fontSize: 25, color: '#8B8B8B' }}>Select  check-in date</Text>
                        </TouchableOpacity>
                        <Text style={{ fontFamily: 'Roboto_300Light', fontSize: 25, color: '#8B8B8B', marginTop: '5%', bottom: '5%' }}></Text>

                    </>


                }

                {
                    <>
                        <TouchableOpacity>
                            <Text style={{ fontFamily: 'Roboto_300Light', fontSize: 25, color: '#8B8B8B' }}>Select  check-out date</Text>
                        </TouchableOpacity>
                        <Text style={{ fontFamily: 'Roboto_300Light', fontSize: 25, color: '#8B8B8B', marginTop: '5%', bottom: '5%' }}></Text>

                    </>
                }

                {
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontFamily: 'Roboto_300Light', fontSize: 25, color: '#8B8B8B' }}>Number of guests</Text>
                        <View style={{ flexDirection: 'row', left: '5%' }}>
                            <FAB
                                disabled={disabledIncrement}
                                visible={true}
                                icon={{ name: 'plus', type: 'font-awesome', color: '#FFFF' }}
                                color="#FF9F45"
                                size='small'
                                style={{ right: '8%' }}
                            onPress={add}

                            />
                            <Text style={{ fontFamily: 'Roboto_300Light', fontSize: 25, color: '#8B8B8B' }}>{increment}</Text>
                            <FAB
                                disabled={disabledDecrement}
                                visible={true}
                                icon={{ name: 'minus', type: 'font-awesome', color: '#FFFF' }}
                                color="#FF9F45"
                                size='small'
                                style={{ left: '8%' }}
                            onPress={reduce}
                            />
                        </View>
                    </View>
                }
            </View>

            <ImageBackground
                source={{ uri: route.params.images[0] }}
                style={{ width: 390, height: 380, top: '8%', borderRadius: 20, padding: 20, paddingTop: '85%', alignSelf: 'center' }}
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
                </View>
            </ImageBackground>
            <Button
                title={'Book'}
                containerStyle={{
                    width: 180,
                    marginHorizontal: 50,
                    marginVertical: 10,
                    top: '10%',
                    elevation: 6
                }}
                titleStyle={{ fontFamily: 'Roboto_300Light', color: '#FFFF' }}
                buttonStyle={{ backgroundColor: '#FF9F45' }}
                onPress={handleBooking}
            />
        </View>
    )
}

export default Booking