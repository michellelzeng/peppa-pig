import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from "redux";
import appReducer from './reducer';
import PostBox from './component/post-box';
import DispatchProvider from './dispatch-provider';
import UploadPhotoMiddleware from './middleware/upload-photo-middleware';

function init(){
    const store = createStore(appReducer, applyMiddleware(UploadPhotoMiddleware));
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