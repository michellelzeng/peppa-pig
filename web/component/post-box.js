import React from 'react';
import PostList from './post-list';
import PostForm from './post-form';

const PostBox = React.createClass({
        getInitialState: () => (
            {data: []}
        ),

        componentDidMount: function() {
            fetch("/post")
                    .then((response) => response.json())
                    .then((data) => {
                        this.setState({data: data._embedded.post});
                    });
        },

        handleCommentSubmit: function(comment) {
            console.log('submit request to server' + comment.content + comment.title);
            fetch("/post", {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(comment)
            });
            comment.key = Date.now();
            let comments = this.state.data;
            this.setState({data: comments.concat([comment])})
        },

        render: function() {
             return (<div>
                 <h1>Recent Posts</h1>
                 <PostList data={this.state.data}/>
                 <PostForm onCommentSubmit={this.handleCommentSubmit}/>
             </div>)
        }
    });

export default PostBox;
