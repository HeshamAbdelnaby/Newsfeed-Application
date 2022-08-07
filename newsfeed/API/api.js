export const BASE_URL = "http://api.mediastack.com/v1/news?access_key=83fb9b305a5b03fa3c826759ba59cf19&sources=en";

export const getSourceAPI = (source) => {
    return `${BASE_URL}&sources=${source}`;
  };