import React from "react";

const CommentForm = React.createClass({

    getInitialState: () => (
        {author: '', text: ''}
    ),

    handleSubmit: function(e) {
        e.preventDefault();
        const author = this.state.author.trim();
        const content = this.state.content.trim();
        if(!content || !author) {
            return;
        }
        this.props.onCommentSubmit({author, content});
        this.setState({author: '', content:''});
    },

    handleAuthorChange: function(e) {
        this.setState({author: e.target.value});
    },

    handleContentChange: function(e) {
        this.setState({content: e.target.value});
    },

    render: function() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="author" value={this.state.author} onChange={this.handleAuthorChange}></input>
                <input type="text" name="content" value={this.state.content} onChange={this.handleContentChange}></input>
                <input type="submit" value="Post"></input>
            </form>
        )
    }
});

export default CommentForm;