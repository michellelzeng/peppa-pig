import React from 'react';
import style from './post.style';
import ProgressBar from './progress-bar';
import {changeContent} from '../action-creator';
import {addPhoto, updateProgress} from '../action-creator';

const PostForm = React.createClass({
    propTypes: {}
    
    getInitialState: () => (
        {content: ''}
    ),

    contextTypes: {
        dispatch: React.PropTypes.func
    },

    handleSubmit: function(e) {
        if(!this.state.content.trim()) {
            return;
        }
        this.props.onSubmit();
        this.setState({content:''});
    },

    handleContentChange: function(e) {
        this.setState({content: e.target.value});
        this.context.dispatch(changeContent(e.target.value));
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
        dispatch(addPhoto());
        const formData = new FormData();
        formData.append("file", file);
        const dispatch = this.context.dispatch;
        const xmlHttpRequest = new XMLHttpRequest();
        xmlHttpRequest.onreadystatechange = function() {
            if(xmlHttpRequest.readyState === XMLHttpRequest.DONE) {
                const hash = xmlHttpRequest.responseText;
                dispatch(updatePhoto(id, hash));
            }
        };
        xmlHttpRequest.upload.addEventListener('progress', this.updateProgress);
        xmlHttpRequest.open('POST', '/uploadFile');
        xmlHttpRequest.send(formData);

    },

    updateProgress: function(event) {
        console.log(event.loaded/event.total, 'loaded');
        this.context.dispatch(updateProgress(event.loaded/event.total));
    },

    render: function() {
        return (
            <div style={style.postContainer}>
                <div style={style.avatar}><img src="mz.jpg" style={style.avatarImage}/></div>
                <div style={style.post}>
                        <textarea style={style.inputText} name="content" value={this.state.content} placeholder="content" onChange={this.handleContentChange}></textarea>
                        <ProgressBar percentage={10} />
                        <div id="preview" />
                        <div style={style.buttonContainer}>
                            <input id='uploadFile' type="file" style={style.uploadFile} multiple style={style.hide} onChange={this.handleFileChange}/>
                            <button onClick={this.openBrowseFileDialogue}>Upload image</button>
                            <button style={style.button} onClick={this.handleSubmit}>Post</button>
                        </div>
                </div>
            </div>
        )
    }
});

export default PostForm;