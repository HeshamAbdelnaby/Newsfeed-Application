import React, { Component } from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView, FlatList} from 'react-native';
import NewsCard from '../components/newsCard';
import Colors from '../constants/Colors';

import { NEWS } from '../data/dummy-data';



class HomeScreen extends Component {
    renderNewsItem = (itemData) => {
        return <NewsCard title={itemData.item.title} image={itemData.item.image} onSelect={() => {
            this.props.navigation.navigate({routeName: 'News', params:{
                title:  itemData.item.title,
            }
        })
    }}/>;
    }

    render() {
      return (
        // <ScrollView style={styles.container}>
            <FlatList
                style={styles.container}
                data={NEWS}
                renderItem={this.renderNewsItem}
                numColumns={1}
                keyExtractor={(item, index) => item.url}
            />
        // </ScrollView>
      );
    }
  }

  HomeScreen.navigationOptions = {
    headerStyle: {
        backgroundColor: Colors.primaryColor,
    },
    headerTintColor: 'white',
  }
  
  export default HomeScreen;

  const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    }
  });