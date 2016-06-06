import React from 'react';
import CommentList from './comment-list';
import CommentForm from './comment-form';

const CommentBox = React.createClass({
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
            console.log('submit request to server' + comment.content + comment.author);
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
                 <h1>Comments</h1>
                 <CommentList data={this.state.data}/>
                 <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
             </div>)
        }
    });

export default CommentBox;
