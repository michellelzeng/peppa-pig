import React from 'react';
import style from './post.style'

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
            <div style={style.postContainer}>
                <div style={style.avatar}><img src="mz.jpg" style={style.avatarImage}/></div>
                <div style={style.post}>
                    <form onSubmit={this.handleSubmit}>
                        <input style={style.inputText} type="text" name="title" value={this.state.title} onChange={this.handleTitleChange} placeholder="title"></input>
                        <textarea style={style.inputText} name="content" value={this.state.content} onChange={this.handleContentChange} placeholder="content"></textarea>
                        <input style={style.submitButton} type="submit" value="Post"></input>
                    </form>
                </div>
            </div>
        )
    }
});

export default PostForm;