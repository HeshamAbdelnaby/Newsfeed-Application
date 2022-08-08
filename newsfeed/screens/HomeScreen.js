import React, { useState } from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView, FlatList, TextInput, RefreshControl, Image} from 'react-native';
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
    const [refreshing, setRefreshing] = React.useState(false);

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
      }

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setSearch('');
        setFilteredNews(NEWS);
        wait(2000).then(() => setRefreshing(false));
    }, []);

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
            {filteredNews.length != 0 ? 
                <FlatList
                    style={styles.list}
                    data={filteredNews}
                    renderItem={this.renderNewsItem}
                    numColumns={1}
                    keyExtractor={(item, index) => item.url}
                    refreshControl={
                        <RefreshControl
                          refreshing={refreshing}
                          onRefresh={onRefresh}
                        />
                    }
                /> : 
                <ScrollView
                style={styles.nothingFoundContainer}
                refreshControl={
                    <RefreshControl
                      refreshing={refreshing}
                      onRefresh={onRefresh}
                    />
                }>
                    <Text style={styles.nothingFoundText}>No News Found!</Text>
                    <View>
                        <Image
                            source={require('../assets/your-file-is-corrupt-broken-concept-illustration-flat-design-eps10-graphic-element-for-app-or-website-ui-ux-vector.jpg')}
                            style={styles.image}/>
                    </View>
                </ScrollView>
            }
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
        backgroundColor: '#FFFFFF'
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
    image:{
        height:500,
        width:'100%',
    },
    nothingFoundText:{
        alignSelf:'center',
    },
    nothingFoundContainer:{
        marginTop: 30,
    }
  });