import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import appReducer from './reducer';
import PostBox from './component/post-box';
import DispatchProvider from './dispatch-provider';

function init(){
    const store = createStore(appReducer);
    ReactDOM.render(
        <DispatchProvider dispatch={store.dispatch}>
            <PostBox store={store}/>
        </DispatchProvider>
        , document.getElementById("post-box"));
}

if (document.readyState === 'complete') {
    init();
} else {
    document.addEventListener('DOMContentLoaded', init);
}