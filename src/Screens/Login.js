import { View, Text, TextInput } from 'react-native'
import { styles } from '../../assets/styles/styles'
import { Icon, Button } from 'react-native-elements'
import React from 'react'

export default function Login({ navigation }) {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.LoginSignUpText}>Log In</Text>

                <View style={styles.textInputEmail_Password}>
                    <Icon name='mail' type='ant-design' size={36} color='rgba(255,159,69,100)' />
                    <TextInput />
                </View>
                <View style={styles.textInputEmail_Password}>
                    <Icon name='lock' type='ant-design' size={36} color='rgba(255,159,69,100)' />
                    <TextInput />
                </View>
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
                    titleStyle={{ fontFamily: 'Roboto_400Regular', fontWeight: '' }}
                // onPress={() => navigation.navigate('')}
                >
                </Button>
                <View style={styles.bottomLinkTextGroup} //onTouchEnd={alert('hello')}
                >
                    <Text style={styles.illustrationPargraph} onPress={() => navigation.navigate('SignUp')}>
                        Dont't have an account?
                    </Text>
                    <Text style={styles.illustrationPargraphOrange} onPress={() => navigation.navigate('SignUp')}> Sign Up</Text>
                </View>
            </View>

        </View>
    )
}