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
            fetch("/piggiepost")
                    .then((response) => response.json())
                    .then((data) => {
                        const posts = data._embedded.piggiepost;
                        this.setState({status: 'ready', data: posts});
                        this.props.store.dispatch({type: 'SET_POSTS', posts: posts});
                    });
        },

        handleSubmit: function(post) {
            fetch("/piggiepost", {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(post)
            });
            post.key = Date.now();
            let newPosts = this.state.data.concat([post]);
            this.setState({data: newPosts});
            this.props.store.dispatch({type: 'SET_POSTS', posts: newPosts});
        },

        render: function() {
             return (<div>
                 <PostForm onCommentSubmit={this.handleSubmit}/>
                 <PostList status={this.state.status} data={this.state.data}/>
             </div>)
        }
    });

export default PostBox;
