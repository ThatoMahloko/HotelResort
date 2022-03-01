import { View, Text, TextInput } from 'react-native'
import { styles } from '../../assets/styles/styles'
import { Icon, Button } from 'react-native-elements'
import React from 'react'

export default function Login({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={{ top: '40%' }}>
                <Text style={styles.LoginSignUpText}>Log In</Text>

                <View style={styles.textInputEmail_Password}>
                    <Icon name='mail' type='ant-design' size={36} color='rgba(255,159,69,100)' />
                    <TextInput style={{ width: '85%', marginLeft: '5%' }} />
                </View>
                <View style={styles.textInputEmail_Password}>
                    <Icon name='lock' type='ant-design' size={36} color='rgba(255,159,69,100)' />
                    <TextInput style={{ width: '85%', marginLeft: '5%' }} />
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
                    titleStyle={{ fontFamily: 'Roboto_400Regular' }}
                    onPress={() => navigation.navigate('BottomNavigationPages')}
                >
                </Button>
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