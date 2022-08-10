import React, { Component } from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image, Pressable, TouchableOpacity} from 'react-native';
import Colors from '../constants/Colors';

class NewsCard extends Component {
  render() {
    return (
        <TouchableOpacity
            style={this.props.darkMode ? styles.containerDark : styles.container}
            onPress={this.props.onSelect}
        >
            <View>
                <Image source={{
                    uri: this.props.image,
                }}
                style={styles.image} 
                />
                <Text style={this.props.darkMode ? styles.darkTitle : styles.title}>{this.props.title}</Text>
            </View>
        </TouchableOpacity>
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
        marginBottom: 20,
    },
    containerDark:{
        width: "90%",
        alignSelf: 'center',
        borderRadius: 20,
        shadowOpacity: 0.7,
        shadowColor: "#000",
        shadowOffset:{
            height:5,
            width:5,
        },
        backgroundColor: 'black',
        elevation:16,
        marginBottom: 20,
        borderColor: Colors.primaryColor,
        borderWidth:1
    },
    image:{
        height:200,
        width:'100%',
        borderTopLeftRadius:20,
        borderTopRightRadius: 20,
    },
    title:{
        fontSize:18,
        fontWeight:"600",
        marginTop:10,
        paddingHorizontal: 10,
        paddingBottom: 10,
    },
    darkTitle:{
        fontSize:18,
        fontWeight:"600",
        marginTop:10,
        paddingHorizontal: 10,
        paddingBottom: 10,
        color: 'white'
    }
})