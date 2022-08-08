export const SEARCH_NEWS = 'SEARCH_NEWS';

export const searchNews = (title) => {
    return { type: SEARCH_NEWS, newsTitle: title };
}