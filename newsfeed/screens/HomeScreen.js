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
import { NavigationActions } from 'react-navigation';
import { AsyncStorage } from 'react-native';



const HomeScreen = ({ navigation }) => {
    renderNewsItem = (itemData) => {
        return <NewsCard title={itemData.item.title} image={itemData.item.image} darkMode={darkTheme} onSelect={() => {
            navigation.navigate('News',{title:  itemData.item.title,});
    }}/>;
    }

    const availableNews = useSelector(state => state.news.filteredNews);
    const themeMode = useSelector(state => state.news.darkMode);

    const dispatch = useDispatch();

    const [search, setSearch] = useState('');
    const [refreshing, setRefreshing] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [language, setLanguage] = useState('en');
    const [darkTheme, setDarkTheme] = useState(false);

    // useEffect(() => {
    //     setDarkTheme(themeMode);
    // });

    const _retrieveData = async () => {
        try {
          const value = await AsyncStorage.getItem('Language');
          const theme = await AsyncStorage.getItem('ThemeMode');
          if (value !== null) {
            // We have data!!
            console.log('value: ' + value);
            console.log('theme: ' + theme);
            setLanguage(value);
            setDarkTheme(theme);
            return value;
          }
        } catch (error) {
          // Error retrieving data
          setLanguage('en');
          setDarkTheme(false);
        }
      };

    const onRefresh = async () => {
        _retrieveData();
        setRefreshing(true);
        setSearch('');
        await dispatch(fetchNews(language));
        setRefreshing(false)
    }

    useEffect(() => {
        dispatch(searchNews(search));
    },[search,language]);

    const loadNews = async () => {
        _retrieveData();
        setSearch('');
        setIsLoading(true);
        await dispatch(fetchNews(language));
        setIsLoading(false);
    }

    useEffect(() => {
        loadNews();
    }, [dispatch,language]);

    const searchFunction = (text) => {
        setSearch(text);
    }

    if(isLoading){
        return (
            <View style={styles.loaderContainer}>
                <ActivityIndicator size='large' color={Colors.primaryColor} />
            </View>
        )
    } else{
      return (
        <SafeAreaView style={darkTheme == 'active' ? styles.conatinerDarkMode : styles.container}>
            <TextInput
                style={darkTheme ? styles.textInputContainerDarkMode : styles.textInputContainer}
                placeholder= {language == 'en' ? "Search" : "Búsqueda"}
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
                    renderItem={renderNewsItem}
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
  
  export default HomeScreen;

  const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        backgroundColor: 'white',
        paddingBottom: 30
    },
    conatinerDarkMode: {
        marginTop: 10,
        backgroundColor: 'black',
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
    textInputContainerDarkMode:{
        width:"70%",
        borderColor: 'black',
        marginHorizontal: "30%",
        borderWidth:2,
        alignSelf:'center',
        borderRadius:10,
        textAlign: 'center',
        backgroundColor: 'white'
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