import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, Select, Switch, AsyncStorage } from 'react-native';
import Colors from '../constants/Colors';
import { useSelector, useDispatch } from 'react-redux';
import DropDownList from '../components/DropDownList';
import { setDark } from '../store/actions/news';
import { color } from 'react-native-reanimated';

const SettingsScreen = (props) => {
    const [isEnabled, setIsEnabled] = useState(false);

    const _storeData = async () => {
        try {
          await AsyncStorage.setItem(
            'ThemeMode',
            isEnabled ? 'active' : 'deactivated'
          );
        } catch (error) {
          console.log("Saving error: " + error);
        }
      };
  
      useEffect(() => {
          console.log('isEnabled: ' + isEnabled);
  
          _storeData();
  
      },[isEnabled]);

    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
    };

    const dispatch = useDispatch();

    const setDarkMode = async () => {
        await dispatch(setDark());
    }

    useEffect(()=>{
        setDarkMode();
    },[isEnabled]);

    return (
        <SafeAreaView style={{backgroundColor: isEnabled ? 'black' : 'white', height:'100%'}}>
            <View style={isEnabled? styles.containerDarkMode : styles.container}>
                <View style={isEnabled? styles.languageContainerDarckMode : styles.languageContainer}>
                    <Text style={isEnabled? styles.textStyleDarkMode : styles.textStyle}>Language</Text>
                    <DropDownList/>
                </View>
                <View style={isEnabled? styles.languageContainerDarckMode : styles.languageContainer}>
                    <Text style={isEnabled? styles.textStyleDarkMode : styles.textStyle}>Theme Mode</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: Colors.primaryColor }}
                        thumbColor={isEnabled ? Colors.darkPrimaryColors : "#f4f3f4"}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

export default SettingsScreen;

SettingsScreen.navigationOptions = {
    headerTitle: 'Settings'
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        alignContent: 'center',
        backgroundColor: 'white'
    },
    containerDarkMode: {
        margin: 10,
        alignContent: 'center',
        backgroundColor: 'black'
    },
    languageContainer: {
        flexDirection:'row',
        width:"70%",
        backgroundColor: 'white',
    },
    languageContainerDarckMode:{
        flexDirection:'row',
        width:"70%",
        backgroundColor: 'black',
    },
    textStyleDarkMode: {
        marginTop:10,
        paddingRight:30,
        color: 'white',
    },
    textStyle: {
        marginTop:10,
        paddingRight:30,
        color: 'black',
    }
})