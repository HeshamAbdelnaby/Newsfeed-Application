import { StyleSheet, Text, View, StatusBar } from 'react-native';
import HomeScreen from './screens/HomeScreen';

import NewsNavigator from './navigation/NewsNavigator';
import { legacy_createStore as createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux'
import newsReducer from './store/reducers/news';

const rootReducer = combineReducers({
  news: newsReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <NewsNavigator />
    </Provider>
  );
}
