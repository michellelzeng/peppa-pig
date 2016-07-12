import React from 'react';
import PostList from './post-list';
import PostForm from './post-form';
import {addPhoto} from '../action-creator';

const PostBox = React.createClass({
        getInitialState: () => (
            {
                status: 'loading',
                data: []}
        ),

        componentDidMount: function() {
            fetch("/getAllPiggiePosts")
                    .then((response) => response.json())
                    .then((data) => {
                        const posts = data;
                        this.setState({status: 'ready', data: posts});
                        this.props.store.dispatch({type: 'SET_POSTS', posts: posts});
                    });
        },

        handleSubmit: function() {
            fetch("/savePiggiePost", {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.props.store.getState().draft)
            });
            this.props.store.dispatch({type: 'ADD_POST', post: this.props.store.getState().draft});
            this.setState({data: this.props.store.getState()});
            //clear the photos on the preview div
            const previewDiv = document.getElementById('preview');
            while(previewDiv.firstChild) {
                previewDiv.removeChild(previewDiv.firstChild);
            }
        },

        uploadFile: function(file) {
            const store = this.props.store;
            const formData = new FormData();
            formData.append("file", file);
            const xmlHttpRequest = new XMLHttpRequest();
            xmlHttpRequest.onreadystatechange = function() {
                if(xmlHttpRequest.readyState === XMLHttpRequest.DONE) {
                    const hash = xmlHttpRequest.responseText;
                    store.dispatch(addPhoto(hash));
                }
            }
            xmlHttpRequest.upload.addEventListener('progress', this.updateProgress);
            xmlHttpRequest.open('POST', '/uploadFile');
            xmlHttpRequest.send(formData);

        },

        updateProgress: function(event) {
            console.log(event.loaded/event.total, 'loaded');
        },

        render: function() {
             return (<div>
                 <PostForm onSubmit={this.handleSubmit} onFileUpload={this.uploadFile}/>
                 <PostList status={this.state.status} data={this.state.data}/>
             </div>)
        }
    });

export default PostBox;
