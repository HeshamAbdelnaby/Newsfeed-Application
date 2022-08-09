import React, { Component } from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image, Pressable, TouchableOpacity} from 'react-native';

class NewsCard extends Component {
  render() {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={this.props.onSelect}
        >
            <View>
                <Image source={{
                    uri: this.props.image,
                }}
                style={styles.image} 
                />
                <Text style={styles.title}>{this.props.title}</Text>
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
    }
})