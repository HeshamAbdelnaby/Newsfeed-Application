import React, { useState } from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView, FlatList, TextInput} from 'react-native';
import NewsCard from '../components/newsCard';
import Colors from '../constants/Colors';

import { NEWS } from '../data/dummy-data';



const HomeScreen = (props) => {
    renderNewsItem = (itemData) => {
        return <NewsCard title={itemData.item.title} image={itemData.item.image} onSelect={() => {
            props.navigation.navigate({routeName: 'News', params:{
                title:  itemData.item.title,
            }
        })
    }}/>;
    }

    const [search, setSearch] = useState('');
    const [news, setNews] = useState(NEWS);
    const [filteredNews, setFilteredNews] = useState(NEWS);

    const searchFunction = (text) => {
        if(text){
            const newData = news.filter((item) => {
                if(item.title.indexOf(text) > -1){
                    return item;
                }
            });
            setFilteredNews(newData);
            setSearch(text);
        } else {
            setFilteredNews(NEWS);
            setSearch(text);
        }
    }

      return (
        <SafeAreaView style={styles.container}>
            <TextInput
                style={styles.textInputContainer}
                placeholder="Search"
                inlineImageLeft='search_icon'
                value={search}
                onChangeText={(text)=>{
                    if(text == '' || text == undefined) {
                        searchFunction('')
                    } else {
                        searchFunction(text)}
                    }
                }/>             
            <FlatList
                style={styles.list}
                data={filteredNews}
                renderItem={this.renderNewsItem}
                numColumns={1}
                keyExtractor={(item, index) => item.url}
            />
        </SafeAreaView>
      );
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
    },
    list:{
        marginTop: 10,
    },
    textInputContainer:{
        width:"70%",
        borderColor: Colors.primaryColor,
        marginHorizontal: "30%",
        borderWidth:2,
        alignSelf:'center',
        borderRadius:10,
        textAlign: 'center'
    },
  });