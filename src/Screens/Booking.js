import { View, Text, ImageBackground, TouchableOpacity, ToastAndroid, ActivityIndicator } from 'react-native'
import { Icon, FAB, Button } from 'react-native-elements'
import { styles } from '../../assets/styles/styles'
import { db, auth,firebase } from '../../config/firebase'
import DateTimePickerModal from 'react-native-datetimepicker-modal'
import moment from 'moment';
import React from 'react'

const Booking = ({ navigation, route }) => {
    const user = auth.currentUser.email
    const [guests, setGuests] = React.useState()
    const [checkInDate, setCheckIndate] = React.useState(new Date())
    const [checkOutDate, setCheckOutdate] = React.useState(new Date())
    const [show, showModal] = React.useState(false);
    const [show_, showModal_] = React.useState(false);
    const toggle = () => showModal(!show);
    const toggle_ = () => showModal_(!show_);
    const [date, setDate] = React.useState(new Date())
    const [open, setOpen] = React.useState(false)
    const [increment, setIncrement] = React.useState(0)
    const [disabledDecrement, setDisabledDecrement] = React.useState(false)
    const [disabledIncrement, setDisabledIncrement] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    const [regDate, setRegDate] = React.useState(new Date())


    React.useEffect(() => {
        console.log(route.params)
    }, [])

    function handleBooking() {
        if (moment(regDate).format('MMMM DD, YYY') == moment(checkInDate).format('MMMM DD, YYYY')) {//moment(checkInDate).format('MMMM DD, YYYY')
            ToastAndroid.show(
                `⚠️ ${moment(checkInDate).format('MMMM DD, YYYY')} Pick a later date! ⚠️`,
                ToastAndroid.BOTTOM
            )
        } else {
            setLoading(true)
            firebase.firestore().collection('Hotels').doc("ApogeeBoutiqueHotel&Spa").collection("Bookings").add({
                hotel: `${route.params.name}`,
                guest: `${guests}`,
                check_in: `${checkInDate}`,
                check_out: `${checkOutDate}`,
                guest_email: `${user}`,
            }).then(() => {
                console.log("Document successfully written!");
                setLoading(false)
                navigation.navigate("BookingSuccessFull")
            })
                .catch((error) => {
                    console.error("Error writing document: ", error);
                });
        }
    }


    function add() {
        setIncrement(increment + 1)
        if (increment > 3 && disabledIncrement == false) {
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
                        <TouchableOpacity onPress={toggle} >
                            <Text style={{ fontFamily: 'Roboto_300Light', fontSize: 25, color: '#8B8B8B' }}>Select  check-in date</Text>
                        </TouchableOpacity>
                        <Text style={{ fontFamily: 'Roboto_300Light', fontSize: 25, color: '#8B8B8B', marginTop: '5%', bottom: '5%' }}>{checkInDate ? moment(checkInDate).format('MMMM DD, YYYY') : '-'}</Text>

                    </>


                }

                {
                    <>
                        <TouchableOpacity onPress={toggle_}>
                            <Text style={{ fontFamily: 'Roboto_300Light', fontSize: 25, color: '#8B8B8B' }}>Select  check-out date</Text>
                        </TouchableOpacity>
                        <Text style={{ fontFamily: 'Roboto_300Light', fontSize: 25, color: '#8B8B8B', marginTop: '5%', bottom: '5%' }}>{checkOutDate ? moment(checkOutDate).format('MMMM DD, YYYY') : '-'}</Text>
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
            <DateTimePickerModal
                value={checkInDate}
                onChange={(event, date) => setCheckIndate(date)}
                show={show}
                toggle={toggle}
            >
            </DateTimePickerModal>
            <DateTimePickerModal
                value={checkOutDate}
                onChange={(event, date) => setCheckOutdate(date)}
                show={show_}
                toggle={toggle_}
            >
            </DateTimePickerModal>
        </View>
    )
}

export default Booking