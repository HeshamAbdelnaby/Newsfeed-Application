import { SEARCH_NEWS, SET_DARK, SET_NEWS } from '../actions/news';

const initialState = {
    news: [],
    filteredNews: [],
    darkMode: false,
}

const newsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_NEWS:
            return {
                news: action.news,
                filteredNews: action.news
            };
        case SEARCH_NEWS:
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
        case SET_DARK:
            const mode = state.darkMode
            console.log(mode);
            return { ...state, darkMode: !mode}
        default:
            return state;
    }
}

export default newsReducer;