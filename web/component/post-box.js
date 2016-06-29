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

        handleSubmit: function(post, files) {
            fetch("/piggiepost", {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(post)
            });
            this.uploadFile(files);
            post.key = Date.now();
            let newPosts = [post].concat(this.state.data);
            this.setState({data: newPosts});
            this.props.store.dispatch({type: 'SET_POSTS', posts: newPosts});
        },

        uploadFile: function(files) {
            const xmlHttpRequest = new XMLHttpRequest();

            const formData = new FormData();
            xmlHttpRequest.open("POST", "/uploadFile", true);

            // for(var file in files) {
            //     formData.append("upload_file", file);
            // }
            for(var i=0; i<files.length; i++) {
                formData.append("upload_file", files[i]);
            }

            xmlHttpRequest.send(formData);
        },

        render: function() {
             return (<div>
                 <PostForm onCommentSubmit={this.handleSubmit}/>
                 <PostList status={this.state.status} data={this.state.data}/>
             </div>)
        }
    });

export default PostBox;
