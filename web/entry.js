import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from "redux";
import appReducer from './reducer';
import PostBox from './component/post-box';
import DispatchProvider from './dispatch-provider';
import uploadPhotoMiddleware from './middleware/upload-photo-middleware';
import loggingMiddleware from './middleware/logging-middleware';

function init(){
    const store = createStore(appReducer, applyMiddleware(loggingMiddleware, uploadPhotoMiddleware));
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