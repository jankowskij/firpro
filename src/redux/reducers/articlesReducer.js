const SET_ARTICLES_LIST = "SET_ARTICLES_LIST";
const SET_ARTICLES_ITEM = "SET_ARTICLES_ITEM";

let initialState = {
  articlesList: [],

  articlesItem: {
    title: null,
    pubDate: null,
    link: null,
    creator: null,
    description: null,
    content: null,
    category: null,
    language: null,
  },
};

export const articlesReducer = (state = initialState, action) => {
  let stateCopy = { ...state };

  if (action.type === SET_ARTICLES_LIST) {
    stateCopy.articlesList = action.data;
    return stateCopy;
  }

  if (action.type === SET_ARTICLES_ITEM) {
    stateCopy.articlesItem = action.data;
    return stateCopy;
  }

  return stateCopy;
};

export let setArticlesList = (data) => {
  return {
    type: SET_ARTICLES_LIST,
    data: data,
  };
};

export let setArticlesItem = (data) => {
  return {
    type: SET_ARTICLES_ITEM,
    data: data,
  };
};
