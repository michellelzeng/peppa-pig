import React from 'react';
import ReactDOM from 'react-dom';
import NewsFeed from './component/news-feed';
import {createStore} from "redux";
import appReducer from './reducer';
import PostBox from './component/post-box';

function init(){
    const store = createStore(appReducer);
    ReactDOM.render(<PostBox store={store}/>, document.getElementById("post-box"));
}

if (document.readyState === 'complete') {
    init();
} else {
    document.addEventListener('DOMContentLoaded', init);
}