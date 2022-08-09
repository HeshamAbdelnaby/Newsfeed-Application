import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    FlatList,
    TextInput,
    RefreshControl,
    Image,
    ActivityIndicator
} from 'react-native';
import NewsCard from '../components/newsCard';
import Colors from '../constants/Colors';
import { searchNews, fetchNews } from '../store/actions/news';



const HomeScreen = (props) => {
    renderNewsItem = (itemData) => {
        return <NewsCard title={itemData.item.title} image={itemData.item.image} onSelect={() => {
            props.navigation.navigate({routeName: 'News', params:{
                title:  itemData.item.title,
            }
        })
    }}/>;
    }

    const availableNews = useSelector(state => state.news.filteredNews);

    const dispatch = useDispatch();

    const [search, setSearch] = useState('');
    const [refreshing, setRefreshing] = React.useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const onRefresh = async () => {
        setRefreshing(true);
        setSearch('');
        await dispatch(fetchNews('en'));
        setRefreshing(false)
    }

    useEffect(() => {
        dispatch(searchNews(search));
    },[search]);

    const loadNews = async () => {
        setSearch('');
        setIsLoading(true);
        await dispatch(fetchNews('en'));
        setIsLoading(false);
    }

    useEffect(() => {
        loadNews();
    }, [dispatch]);

    const searchFunction = (text) => {
        setSearch(text);
    }

    if(isLoading){
        return <View style={styles.loaderContainer}>
            <ActivityIndicator size='large' color={Colors.primaryColor} />
        </View>
    } else{
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
            {availableNews.length != 0 ? 
                <FlatList
                    style={styles.list}
                    data={availableNews}
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
      )};
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
        backgroundColor: '#FFFFFF',
        paddingBottom: 30
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
    },
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
  });