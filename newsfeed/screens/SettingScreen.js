import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, Select } from 'react-native';
import Colors from '../constants/Colors';
import { useSelector } from 'react-redux';

const NewsDetailsScreen = (props) => {
    return (
        <ScrollView>
            <Text>Settings</Text>
        </ScrollView>
    );
}

export default NewsDetailsScreen;

NewsDetailsScreen.navigationOptions = {
    headerTitle: 'Settings'
}

const styles = StyleSheet.create({
    container: {
        // marginTop: 10,
        alignContent: 'center'
    },
})