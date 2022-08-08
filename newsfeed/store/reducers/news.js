import {NEWS} from '../../data/dummy-data';
import { SEARCH_NEWS } from '../actions/news';

const initialState = {
    news: NEWS,
    filteredNews: NEWS,
}

const newsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEARCH_NEWS:
            // if(action.newsTitle){
                const newNews = state.news.filter((item) => {
                    if(item.title.indexOf(action.newsTitle) > -1){
                        return item;
                    }
                });
                if(newNews.length != 0){
                    console.log('filteredNews: ' + newNews);
                return {...state, filteredNews: newNews};
                }
              else {
                console.log('filteredNews: ' + newNews);
                return {...state, filteredNews: newNews};
            }
        // }
        default:
            return state;
    }
}

export default newsReducer;