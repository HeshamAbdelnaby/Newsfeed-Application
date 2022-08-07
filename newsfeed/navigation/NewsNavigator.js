import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import NewsDetailsScreen from '../screens/NewsDetIilsScree';

const NewsNavigator = createStackNavigator({
    Home: HomeScreen,
    News: NewsDetailsScreen,
});

export default createAppContainer(NewsNavigator);