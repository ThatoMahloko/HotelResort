import { View, Text, TextInput, ActivityIndicator } from 'react-native'
import { styles } from '../../assets/styles/styles'
import { Icon, Button } from 'react-native-elements'
import React, { useState } from 'react'
import { auth } from '../../config/firebase'

export default function SignUp({ navigation }) {
    const [loading, setLoading] = React.useState(false)
    const [email, setEmail] = React.useState(String)
    const [password, setPassword] = useState(String)
    const [confirmPassword, setConfirmPassword] = React.useState(String)

    const load = () => {
        setLoading(true)
            navigation.navigate('BottomNavigationPages')
            setLoading(false)



    }

    const SignUpAuth = () => {
        console.log(auth.currentUser.email)
        setLoading(true)
            auth.createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                }).catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage)
                })
            setLoading(false)
            if (auth.currentUser == email) {
                navigation.navigate("BottomNavigationPages")
            }else{
                console.log('err')
            }
    }
    return (
        <View style={styles.container}>
            <View style={styles.signUpContainer}>
                <Text style={styles.signUpText}>Sign Up</Text>

                <View style={styles.textInputEmail_Password}>
                    <Icon name='mail' type='ant-design' size={36} color='rgba(255,159,69,100)' />
                    <TextInput style={{ width: '85%', marginLeft: '5%' }} onChangeText={(email) => setEmail(email)} keyboardType='email-address' />
                </View>
                <View style={styles.textInputEmail_Password}>
                    <Icon name='lock' type='ant-design' size={36} color='rgba(255,159,69,100)' />
                    <TextInput style={{ width: '85%', marginLeft: '5%' }} onChangeText={(password) => setPassword(password)} />
                </View>
                <View style={styles.textInputEmail_Password}>
                    <Icon name='lock' type='ant-design' size={36} color='rgba(255,159,69,100)' />
                    <TextInput style={{ width: '85%', marginLeft: '5%' }} onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)} />
                </View>

                {
                    loading == true ?
                        <ActivityIndicator size={'large'} color="red" style={{ bottom: 50 }} />
                        :
                        <Button style={styles.button} title={'Sign Up'} icon={
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
                            onPress={SignUpAuth}
                        >
                        </Button>
                }

                <View style={styles.bottomLinkTextGroup}>
                    <Text style={styles.illustrationPargraph} onPress={() => navigation.goBack()}>
                        Already have an account?
                    </Text>
                    <Text style={styles.illustrationPargraphOrange} onPress={() => navigation.goBack()}> Log In</Text>
                </View>
            </View>

        </View>
    )
}

