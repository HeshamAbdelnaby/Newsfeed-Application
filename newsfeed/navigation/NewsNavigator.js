import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, StackRouter} from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import NewsDetailsScreen from '../screens/NewsDetIilsScree';
import SettingsScreen from '../screens/SettingScreen';
import Colors from '../constants/Colors';

const NewsNavigator = createStackNavigator({
    Home: HomeScreen,
    News: NewsDetailsScreen,
});

const Stack = createNativeStackNavigator();

function MainStack() {
    return(
    <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='News' component={NewsDetailsScreen} />
    </Stack.Navigator>
    );
}

const Drawer = createDrawerNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home" screenOptions={{headerTintColor: 'white',headerStyle:{backgroundColor:Colors.primaryColor}}}>
          <Drawer.Screen name="Main" component={MainStack} />
          <Drawer.Screen name="Settings" component={SettingsScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    )
  }