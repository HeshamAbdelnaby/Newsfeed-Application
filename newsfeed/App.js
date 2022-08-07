import { StyleSheet, Text, View, StatusBar } from 'react-native';
import HomeScreen from './screens/HomeScreen';

import NewsNavigator from './navigation/NewsNavigator';

export default function App() {
  return (
    <NewsNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: "20%",
    marginTop: 30,
  },
});
