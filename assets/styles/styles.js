import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFDF9",//FFFDF9 F9FCFB FFFFFF
        alignItems: 'center',
        // justifyContent: 'space-around',
        padding: 20,
    },
    text: {
        fontFamily: 'Roboto_300Light',
        fontSize: 18
    },
    illustration: {
        bottom: '1%',
        marginTop: '20%',
        marginBottom: '5%',
        alignSelf: 'center',
    },
    illustrationTitle: {
        fontFamily: 'Roboto_300Light', fontWeight: 'normal',
        fontSize: 27,
        textAlign: 'center',
        marginTop: 10
    },
    illustrationPargraph: {
        fontFamily: 'Roboto_100Thin',
        textAlign: 'center',
        fontSize: 18,
        marginTop: '5%'
    },
    onBoardingContainer: {
        paddingBottom: '20%',
        // backgroundColor:'red'
    },
    button: {
        top: '5%'
    },
    ///Login Styles
    LoginSignUpText: {
        fontFamily: 'Roboto_300Light', fontWeight: 'normal',
        fontSize: 27,
        // right: '35%',
        bottom: '40%'
    },
    textInputEmail_Password: {
        flexDirection: 'row',
        borderColor: '#FF9F45',
        borderWidth: 1,
        borderRadius: 20,
        width: 340,
        height: 61,
        padding: 10,
        bottom: '15%',
        marginBottom: '10%'
    },
    bottomLinkTextGroup: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    illustrationPargraphOrange: {
        fontFamily: 'Roboto_400Regular',
        textAlign: 'center',
        fontSize: 18,
        marginTop: '5%',
        color: '#FF9F45',
    },
    ///Sign up styles
    signUpContainer: {
        marginTop: '20%', top: '29%'
    },
    signUpText: {
        fontFamily: 'Roboto_300Light', fontWeight: 'normal',
        fontSize: 27,
        // right: '35%',
        bottom: '26%'
    },
    ///Home Styling
    avatars: {
        flexDirection: 'row',
        alignItems: 'center', bottom: '-5%'
    },
    homeFilterGroup: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center', bottom: '-6%', left: '1%'
    },
    homeFlterInput: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#FFBC80',
        borderRadius: 20,
        height: 60,
        width: 300,
        justifyContent: 'center',
        padding: '1%',
        alignItems: 'center'
    },
    homeAvataGroup: {
        flexDirection: 'row',
        justifyContent: 'center', bottom: '-35%'
    },
    propertyIntroHeadingContainer: {
        flexDirection: 'row',
        alignItems: 'center', bottom: '-6%',
        right: '8%',
    },
    propertyIntroHeading: {
        fontFamily: 'Roboto_300Light', fontWeight: 'normal',
        fontSize: 27,
    },
    propertyIntroHeadingViewAll: {
        left: '260%',
        fontFamily: 'Roboto_300Light',
        fontSize: 18,
        color: '#FF9F45',
    },
    pagerView: {
        height: 320,
        width: 300,
        top: '12%', margin: 0
    },
    cardCitytext: {
        fontFamily: 'Roboto_300Light', fontWeight: 'normal',
        fontSize: 20,
        top: '1%'
    },
    cityCardDetails: {
        flexDirection: 'row'
    },
    cityName: {
        fontFamily: 'Roboto_300Light', fontWeight: 'normal',
        fontSize: 18,
        color: '#A7A7A7'
    },
    popularPorpertiesGroup: {
        flexDirection: 'row',
        right: '14%',
        top: '40%'
    },
    popularLcationsHeading: {
        fontFamily: 'Roboto_300Light', fontWeight: 'normal',
        fontSize: 27,
    },
    popularLcationsHeadingViewAll: {
        left: '467%',
        fontFamily: 'Roboto_300Light',
        fontSize: 18,
        color: '#FF9F45',
    },
    popularPagerView: {
        width: 370,
        height: 125,
        bottom: '30%',

    },
    popularScrollable: {
        top: '40%'
    },
    popularCard: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        elevation: 3,
        borderRadius: 20,
        width: 310,
        padding: 10,
        height: 130,
        margin: 5
    },
    popularCalrdImage: {
        width: 140, height: 90,
        borderRadius: 20,
        alignSelf: 'center'
    },
    popularcardImageTextContent:{
        left: '10%', top: '10%'
    },
    popularCardIcon:{
        flexDirection: 'row', right: '6%'
    },
    popularCardTextContentSubText:{
        fontFamily: 'Roboto_300Light', color: '#A7A7A7' 
    }
});