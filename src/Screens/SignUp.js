import { View, Text, TextInput, ActivityIndicator } from 'react-native'
import { styles } from '../../assets/styles/styles'
import { Icon, Button } from 'react-native-elements'
import React, { useState } from 'react'

export default function SignUp({ navigation }) {
    const [loading, setLoading] = useState(false)

    const load = () => {
        setLoading(true)
        setTimeout(function () {
            navigation.navigate('BottomNavigationPages')
            setLoading(false)

        }, 2000)


    }
    return (
        <View style={styles.container}>
            <View style={styles.signUpContainer}>
                <Text style={styles.signUpText}>Sign Up</Text>

                <View style={styles.textInputEmail_Password}>
                    <Icon name='mail' type='ant-design' size={36} color='rgba(255,159,69,100)' />
                    <TextInput style={{ width: '85%', marginLeft: '5%' }} />
                </View>
                <View style={styles.textInputEmail_Password}>
                    <Icon name='lock' type='ant-design' size={36} color='rgba(255,159,69,100)' />
                    <TextInput style={{ width: '85%', marginLeft: '5%' }} />
                </View>
                <View style={styles.textInputEmail_Password}>
                    <Icon name='lock' type='ant-design' size={36} color='rgba(255,159,69,100)' />
                    <TextInput style={{ width: '85%', marginLeft: '5%' }} />
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
                        titleStyle={{ fontFamily: 'Roboto_400Regular'}}
                        onPress={load}
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

