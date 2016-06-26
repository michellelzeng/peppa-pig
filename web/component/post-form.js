import React from 'react';
import style from './post.style'

const PostForm = React.createClass({

    getInitialState: () => (
        {content: ''}
    ),

    handleSubmit: function(e) {
        e.preventDefault();
        const content = this.state.content.trim();
        if(!content) {
            return;
        }
        this.props.onCommentSubmit({content});
        this.setState({content:''});
    },

    handleContentChange: function(e) {
        this.setState({content: e.target.value});
    },

    handleFileChange: function() {
        document.getElementById('uploadFile').click();
    },

    render: function() {
        return (
            <div style={style.postContainer}>
                <div style={style.avatar}><img src="mz.jpg" style={style.avatarImage}/></div>
                <div style={style.post}>
                    <form onSubmit={this.handleSubmit}>
                        <textarea style={style.inputText} name="content" value={this.state.content} onChange={this.handleContentChange} placeholder="content"></textarea>
                        <div style={style.buttonContainer}>
                            <input id='uploadFile' type="file" style={style.uploadFile} multiple style={style.hide}/>
                            <button onClick={this.handleFileChange}>Upload image</button>
                            <button style={style.button} >Post</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
});

export default PostForm;