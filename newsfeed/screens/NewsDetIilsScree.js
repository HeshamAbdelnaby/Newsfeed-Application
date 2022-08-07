import React, { Component } from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView, Image} from 'react-native';
import Colors from '../constants/Colors';
import { NEWS } from '../data/dummy-data';

class NewsDetailsScreen extends Component {
    newsTitle = this.props.navigation.getParam('title');
    selectedNews = NEWS.find(news => news.title == this.newsTitle);

    render() {
      return (
        <View style={styles.container}>
            <Image source={{
                    uri: this.selectedNews.image,
                }}
                style={styles.image} 
                />
            <Text>{this.selectedNews.title}</Text>
            <Text>{this.selectedNews.description}</Text>
        </View>
      );
    }
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
        marginTop: 10,
        alignContent:'center'
    },
    image:{
        alignSelf:'center',
        height:300,
        width:'95%',
        // borderTopLeftRadius:20,
        // borderTopRightRadius: 20,
        borderRadius:20
    }
  })