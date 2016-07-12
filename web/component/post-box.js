import React from 'react';
import PostList from './post-list';
import PostForm from './post-form';

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

        handleSubmit: function(post) {
            post.photos = this.props.store.getState().photos;
            fetch("/savePiggiePost", {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(post)
            });
            post.key = Date.now();
            let newPosts = [post].concat(this.state.data);
            this.setState({data: newPosts});
            this.props.store.dispatch({type: 'SET_POSTS', posts: newPosts});

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
//                fetch("/uploadFile", {
//                    method: "POST",
//                    body: formData
//                }).then(function (response) {
//                    return response.text();
//                }).then(function (hash){
//                    console.log('hash is: ' + hash);
//                    store.dispatch({
//                        type: 'SAVE_HASH',
//                        photo: {
//                            hash
//                        }
//                    });
//                });
            const xmlHttpRequest = new XMLHttpRequest();
            xmlHttpRequest.onreadystatechange = function() {
                if(xmlHttpRequest.readyState === XMLHttpRequest.DONE) {
                    const hash = xmlHttpRequest.responseText;
                    store.dispatch({
                        type: 'SAVE_HASH',
                        photo: {
                            hash
                        }
                    });
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
