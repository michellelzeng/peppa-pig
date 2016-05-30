import React from 'react';
import ReactDOM from 'react-dom';
import NewsFeed from './component/news-feed';
import {createStore} from "redux";
import appReducer from './reducer'

function init(){
    let store = createStore(appReducer);
    
    ReactDOM.render(
      <NewsFeed posts={store.getState().posts}/>,
      document.getElementById('app')
    );
}

if (document.readyState === 'complete') {
    init();
} else {
    document.addEventListener('DOMContentLoaded', init);
}