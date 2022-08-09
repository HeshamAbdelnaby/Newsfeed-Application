import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

export type Props = {
    onSelect: Function;
    image: string;
    title: string;
}

const NewsCard: React.FC<Props> = ({
    onSelect,
    image,
    title
}) => {
    const onPress = () => {
        onSelect();
    }
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
        >
            <View>
                <Image source={{
                    uri: image,
                }}
                style={styles.image} 
                />
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

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
});

export default NewsCard;