import React, { Component } from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';

class NewsCard extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Image source={{
            uri:"https://media.wired.com/photos/62d866d1ddaaa99a1df8e62f/191:100/w_1280,c_limit/Google-Pixel-6A-Review-Gear.jpg"
        }}
        style={styles.image} 
        />

        <Text style={styles.title}>13 Great Deals on Smartphones, Laptops, and Smart Speakers</Text>
      </SafeAreaView>
    );
  }
}

export default NewsCard;

const styles=StyleSheet.create({
    container:{
        width: "90%",
        alignSelf: 'center',
        borderRadius: 20,
        shadowOpacity: 0.7,
        shadowColor: "#000",
        shadowOffset:{
            height:5,
            width:5,
        },
        backgroundColor: '#fff',
        elevation:16,
        marginTop: 20,
    },
    image:{
        height:200,
        width:'100%',
        borderTopLeftRadius:40,
        borderTopRightRadius: 40,
    },
    title:{
        fontSize:18,
        fontWeight:"600",
        marginTop:10,
        paddingHorizontal: 10,
    }
})