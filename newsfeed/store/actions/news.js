import NewsModel from '../../models/newsModel';
import { View, Text, AsyncStorage  } from 'react-native';

export const SEARCH_NEWS = 'SEARCH_NEWS';
export const SET_NEWS = 'SET_NEWS';
export const SET_DARK = 'SET_DARK';

export const fetchNews = (lang) => {
    
    return async dispatch => {
        const response = await fetch(
            'http://api.mediastack.com/v1/news?access_key=83fb9b305a5b03fa3c826759ba59cf19&sources=' + lang
        );

        const resData = await response.json();

        const loadedNews = [];
        for(const key in resData['data']){
            loadedNews.push(
                new NewsModel(
                    resData['data'][key].author,
                    resData['data'][key].title,
                    resData['data'][key].description,
                    resData['data'][key].url,
                    resData['data'][key].source,
                    resData['data'][key].image,
                    resData['data'][key].category,
                    resData['data'][key].language,
                    resData['data'][key].country,
                    resData['data'][key].published_at
                )
            );
        }
        dispatch({type: SET_NEWS, news: loadedNews});
    }
}

export const searchNews = (title) => {
    return { type: SEARCH_NEWS, newsTitle: title };
}

export const setDark = () => {
    return { type: SET_DARK };
}