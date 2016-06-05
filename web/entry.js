import React from 'react';
import ReactDOM from 'react-dom';
import NewsFeed from './component/news-feed';
import {createStore} from "redux";
import appReducer from './reducer';
import CommentBox from './component/comment-box';

function init(){
    ReactDOM.render(<CommentBox/>, document.getElementById("app"));
}

if (document.readyState === 'complete') {
    init();
} else {
    document.addEventListener('DOMContentLoaded', init);
}