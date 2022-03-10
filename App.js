import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from './assets/styles/styles';
import {
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic
} from '@expo-google-fonts/roboto'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading';
import OnBoarding from './src/Screens/OnBoarding';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Illustration from './assets/icons/Illustration';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/Screens/Login';
import SignUp from './src/Screens/SignUp';
import Home from './src/Screens/Home'
import BottomNavigationPages from './src/Screens/BottomNavigationPages';
import Details from './src/Screens/Details';
const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded, error] = useFonts({
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 50,
      mass: 3,
      overshootClamping: false,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          transitionSpec: {
            open: config,
            close: config
          }
        }}

      >
        <Stack.Screen name='Details' component={Details} />
        <Stack.Screen name='Start' component={OnBoarding} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='SignUp' component={SignUp} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='BottomNavigationPages' component={BottomNavigationPages} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


