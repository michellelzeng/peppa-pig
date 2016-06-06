import React from "react";

const PostForm = React.createClass({

    getInitialState: () => (
        {author: '', text: ''}
    ),

    handleSubmit: function(e) {
        e.preventDefault();
        const title = this.state.title.trim();
        const content = this.state.content.trim();
        if(!content || !title) {
            return;
        }
        this.props.onCommentSubmit({title, content});
        this.setState({title: '', content:''});
    },

    handleTitleChange: function(e) {
        this.setState({title: e.target.value});
    },

    handleContentChange: function(e) {
        this.setState({content: e.target.value});
    },

    render: function() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="text" name="title" value={this.state.title} onChange={this.handleTitleChange} placeholder="title"></input>
                </div>
                <div>
                    <input type="text" name="content" value={this.state.content} onChange={this.handleContentChange} placeholder="content"></input>
                </div>
                <input type="submit" value="Post"></input>
            </form>
        )
    }
});

export default PostForm;