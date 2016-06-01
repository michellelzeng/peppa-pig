import React from 'react';
import ReactDOM from 'react-dom';
import NewsFeed from './component/news-feed';
import {createStore} from "redux";
import appReducer from './reducer';

function init(){


    let store = createStore(appReducer);
    
    ReactDOM.render(
      <NewsFeed posts={store.getState().posts}/>,
      document.getElementById('app')
    );
    fetch("http://localhost:8080/post")
        .then((response) => response.json())
        .then((data) => {
            store.dispatch({type: 'SET_POSTS', posts: data.post})
        });

}

if (document.readyState === 'complete') {
    init();
} else {
    document.addEventListener('DOMContentLoaded', init);
}