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

    openBrowseFileDialogue: function() {
        document.getElementById('uploadFile').click();
    },

    handleFileChange: function(event, files) {
        console.log("arguments " + arguments.length);
        console.log(document.getElementById('uploadFile').files.length);

    },

    render: function() {


        return (
            <div style={style.postContainer}>
                <div style={style.avatar}><img src="mz.jpg" style={style.avatarImage}/></div>
                <div style={style.post}>
                    <form onSubmit={this.handleSubmit}>
                        <textarea style={style.inputText} name="content" value={this.state.content} placeholder="content"></textarea>
                        <div style={style.buttonContainer}>
                            <input id='uploadFile' type="file" style={style.uploadFile} multiple style={style.hide} onChange={this.handleFileChange}/>
                            <button onClick={this.openBrowseFileDialogue}>Upload image</button>
                            <button style={style.button} >Post</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
});

export default PostForm;