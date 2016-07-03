import React from 'react';
import style from './post.style';

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
        this.props.onSubmit({content});
        this.setState({content:''});
    },

    handleContentChange: function(e) {
        this.setState({content: e.target.value});
    },

    openBrowseFileDialogue: function() {
        document.getElementById('uploadFile').click();
    },

    handleFileChange: function(event) {
        const files = event.target.files;

        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            this.uploadFile(file);
            var imageType = /^image\//;

            if (!imageType.test(file.type)) {
              continue;
            }

            var img = document.createElement("img");
            img.classList.add("preview-img");
            img.file = file;
            document.getElementById("preview").appendChild(img);

            var reader = new FileReader();
            reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
            reader.readAsDataURL(file);
        }
    },

    uploadFile: function(file) {
//        const xmlHttpRequest = new XMLHttpRequest();
//        const formData = new FormData();
//        xmlHttpRequest.open("POST", "/uploadFile", true);
//        formData.append("upload_file", file);
//        xmlHttpRequest.send(formData);
//          fetch()
        const formData = new FormData();
        formData.append("upload_file", file);
        fetch("/uploadFile", {
            method: "POST",
            body: formData
        });
        console.log("using fetch");

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