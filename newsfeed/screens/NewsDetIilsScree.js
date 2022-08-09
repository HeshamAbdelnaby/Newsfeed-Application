import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';
import Colors from '../constants/Colors';
import { useSelector } from 'react-redux';

const NewsDetailsScreen = (props) => {
    const availableNews = useSelector(state => state.news.news);
    const newsTitle = props.navigation.getParam('title');
    const selectedNews = availableNews.find(news => news.title == newsTitle);
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image source={{
                    uri: selectedNews.image,
                }}
                    style={styles.image}
                />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{selectedNews.title}</Text>
                </View>
                <View style={styles.descriptionContainer}>
                    <Text>{selectedNews.description}</Text>
                </View>
                <View style={styles.infoContainer}>
                    <View style={styles.categoryContainer}>
                        <Text style={{ alignSelf: 'center' }}>{new Date(selectedNews.published_at).toDateString()}</Text>
                    </View>
                    <View style={styles.categoryContainer}>
                        <Text style={{ alignSelf: 'center' }}>{selectedNews.category}</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

export default NewsDetailsScreen;

NewsDetailsScreen.navigationOptions = {
    headerStyle: {
        backgroundColor: Colors.primaryColor,
    },
    headerTintColor: 'white',
}

const styles = StyleSheet.create({
    container: {
        // marginTop: 10,
        alignContent: 'center'
    },
    image: {
        alignSelf: 'center',
        height: 300,
        width: '100%',
    },
    title: {
        fontSize: 18,
        fontWeight: "600",
        marginTop: 10,
        paddingHorizontal: 10,
        paddingBottom: 10,
    },
    titleContainer: {
        borderLeftColor: Colors.primaryColor,
        borderLeftWidth: 3,
        marginHorizontal: 15,
        marginTop: 10,
    },
    descriptionContainer: {
        marginHorizontal: 15,
        marginTop: 20,
    },
    categoryContainer: {
        backgroundColor: Colors.primaryColor,
        marginHorizontal: 15,
        marginTop: 10,
        padding: 10,
        borderRadius: 20,
        flex: 1,
    },
    infoContainer: {
        flexDirection: 'row',
    }
})