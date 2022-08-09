import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import NewsDetailsScreen from '../screens/NewsDetIilsScree';

const RootStack = createNativeStackNavigator();

const NewsNavigator = createStackNavigator({
    Home: HomeScreen,
    News: NewsDetailsScreen,
});

export default createAppContainer(NewsNavigator);