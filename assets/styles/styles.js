import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFDF9",//FFFDF9 F9FCFB FFFFFF
        alignItems: 'center',
        justifyContent: 'space-around',
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
        bottom:'40%'
    },
    textInputEmail_Password: {
        flexDirection: 'row',
        borderColor: '#FF9F45',
        borderWidth: 1,
        borderRadius: 20,
        width: 340,
        height: 61,
        padding:10, 
        bottom:'15%',
        marginBottom:'10%'
    },
    bottomLinkTextGroup:{
        flexDirection:'row',
        alignSelf:'center'
    },
   illustrationPargraphOrange:{
    fontFamily: 'Roboto_400Regular',
    textAlign: 'center',
    fontSize: 18,
    marginTop: '5%',
    color:'#FF9F45',
   },
   ///Sign up styles
   signUpContainer:{
       marginTop:'20%'
   },
   signUpText:{
    fontFamily: 'Roboto_300Light', fontWeight: 'normal',
    fontSize: 27,
    // right: '35%',
    bottom:'30%'
   }

});