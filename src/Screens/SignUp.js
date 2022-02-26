import { View, Text, TextInput } from 'react-native'
import { styles } from '../../assets/styles/styles'
import { Icon, Button } from 'react-native-elements'
import React from 'react'

export default function SignUp({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.signUpContainer}>
                <Text style={styles.signUpText}>Sign Up</Text>

                <View style={styles.textInputEmail_Password}>
                    <Icon name='mail' type='ant-design' size={36} color='rgba(255,159,69,100)' />
                    <TextInput />
                </View>
                <View style={styles.textInputEmail_Password}>
                    <Icon name='lock' type='ant-design' size={36} color='rgba(255,159,69,100)' />
                    <TextInput />
                </View>
                <View style={styles.textInputEmail_Password}>
                    <Icon name='lock' type='ant-design' size={36} color='rgba(255,159,69,100)' />
                    <TextInput />
                </View>
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
                    titleStyle={{ fontFamily: 'Roboto_400Regular', fontWeight: '' }}
                // onPress={() => navigation.navigate('')}
                >
                </Button>
                <View style={styles.bottomLinkTextGroup} //onTouchEnd={alert('hello')}
                >
                    <Text style={styles.illustrationPargraph} onPress={() => navigation.goBack()}>
                        Already have an account?
                    </Text>
                    <Text style={styles.illustrationPargraphOrange} onPress={() => navigation.goBack()}> Sign Up</Text>
                </View>
            </View>

        </View>
    )
}