import { View, Text, TextInput, ActivityIndicator } from 'react-native'
import { styles } from '../../assets/styles/styles'
import { Icon, Button } from 'react-native-elements'
import { auth } from '../../config/firebase'
import firebase from 'firebase'
import React, { useState } from 'react'

export default function Login({ navigation }) {
    const [loading, setLoading] = React.useState(false)
    const [email, setEmail] = React.useState(String)
    const [password, setPassword] = React.useState(String)

    const load = () => {
        setLoading(true)
        setTimeout(function () {
            navigation.navigate("BottomNavigationPages")
            setLoading(false)
            console.log("hjhjhjh")
        }, 2000)


    }

    const LoginAuth = () => {
        console.log("hello", email+password)
        setLoading(true)
        setTimeout(function () {
            auth.signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                }).catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage, " ", errorCode)
                })
            setLoading(false)
            if (auth.currentUser.email == email) {
                navigation.navigate("BottomNavigationPages")
            }else{
                console.log('err')
                auth.signOut
            }
        }, 2000)

    }

    return (
        <View style={styles.container}>
            <View style={{ top: '40%' }}>
                <Text style={styles.LoginSignUpText}>Log In</Text>

                <View style={styles.textInputEmail_Password}>
                    <Icon name='mail' type='ant-design' size={36} color='rgba(255,159,69,100)' />
                    <TextInput keyboardType='email-address' style={{ width: '85%', marginLeft: '5%' }} onChangeText={(email) => setEmail(email)} />
                </View>
                <View style={styles.textInputEmail_Password}>
                    <Icon name='lock' type='ant-design' size={36} color='rgba(255,159,69,100)' />
                    <TextInput secureTextEntry={true} style={{ width: '85%', marginLeft: '5%' }} onChangeText={(password) => setPassword(password)}  />
                </View>
                {
                    loading == true ?
                        <ActivityIndicator size={'large'} color="red" style={{ bottom: 50 }} />
                        :
                        <Button style={styles.button} title={'Log In'} icon={
                            {
                                type: 'font-awsome',
                                name: 'chevron-right',
                                color: 'white'
                            }}
                            iconRight
                            buttonStyle={{
                                backgroundColor: 'rgba(255,159, 69,100)',
                                borderRadius: 20, height: 60
                            }}
                            containerStyle={{ marginTop: '-15%', width: 340, alignSelf: 'center' }}
                            titleStyle={{ fontFamily: 'Roboto_400Regular' }}
                            onPress={LoginAuth}
                        >
                        </Button>
                }
                <View style={styles.bottomLinkTextGroup}>
                    <Text style={styles.illustrationPargraph} onPress={() => navigation.navigate('SignUp')}>
                        Dont't have an account?
                    </Text>
                    <Text style={styles.illustrationPargraphOrange} onPress={() => navigation.navigate('SignUp')}> Sign Up</Text>
                </View>
            </View>

        </View>
    )
}