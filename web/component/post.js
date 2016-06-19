import React from 'react';
import style from './post.style.js';
const Post = React.createClass({
    render: function() {
        return (
                <div style={style.postContainer}>
                    <div style={style.avatar}><img src="mz.jpg" style={style.image}/></div>
                    <div style={style.post}>
                        <p>{this.props.author}</p>
                        <p>{this.props.children}</p>
                    </div>
                </div>
        );
    }
});

export default Post;