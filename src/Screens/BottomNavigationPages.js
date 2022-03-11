import { View, Text } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Icon } from 'react-native-elements';
import Home from './Home'
import Login from './Login'
import SignUp from './SignUp'
import OnBoarding from './OnBoarding'
import Notifications from './Notifications';
import Bookmarks from './Bookmarks';
import React from 'react'

export default function BottomNavigationPages() {
    const Tab = createMaterialBottomTabNavigator();

    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#FF9F45"
            inactiveColor="#F9E7D8"
            barStyle={{ backgroundColor: '#FFFDF9' }}
        >
            <Tab.Screen
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => (
                        <Icon name='home' color={color} />
                    )
                }}
                name="Home" component={Home} />
            <Tab.Screen
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => (
                        <Icon name='bell' type='font-awesome' color={color} />
                    )
                }}
                name="Notifications" component={Notifications} />
            <Tab.Screen
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => (
                        <Icon name='bookmark' type='font-awesome' color={color} />
                    )
                }}
                name="Bookmarks" component={Bookmarks} />
        </Tab.Navigator>
    )
}