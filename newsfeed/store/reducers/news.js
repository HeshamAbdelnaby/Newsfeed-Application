import {NEWS} from '../../data/dummy-data';
import { SEARCH_NEWS, SET_NEWS } from '../actions/news';

const initialState = {
    news: [],
    filteredNews: [],
}

const newsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_NEWS:
            console.log(action.news);
            return {
                news: action.news,
                filteredNews: action.news
            };
        case SEARCH_NEWS:
            // if(action.newsTitle){
                const newNews = state.news.filter((item) => {
                    if(item.title.indexOf(action.newsTitle) > -1){
                        return item;
                    }
                });
                if(newNews.length != 0){
                return {...state, filteredNews: newNews};
                }
              else {
                return {...state, filteredNews: newNews};
            }
        // }
        default:
            return state;
    }
}

export default newsReducer;