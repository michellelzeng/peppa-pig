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

    handleFileChange: function(event) {
        console.log("arguments " + arguments.length);
        console.log(document.getElementById('uploadFile').files.length);
        const files = document.getElementById('uploadFile').files;
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            var imageType = /^image\//;

            if (!imageType.test(file.type)) {
              continue;
            }

            var img = document.createElement("img");
            img.classList.add("preview-img");
            img.file = file;
            document.getElementById("preview").appendChild(img); // Assuming that "preview" is the div output where the content will be displayed.

            var reader = new FileReader();
            reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
            reader.readAsDataURL(file);
        }
    },

    render: function() {
        return (
            <div style={style.postContainer}>
                <div style={style.avatar}><img src="mz.jpg" style={style.avatarImage}/></div>
                <div style={style.post}>
                    <form onSubmit={this.handleSubmit}>
                        <textarea style={style.inputText} name="content" value={this.state.content} placeholder="content" onChange={this.handleContentChange}></textarea>
                        <div id="preview" />
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