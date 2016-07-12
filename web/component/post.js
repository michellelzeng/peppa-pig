import React from 'react';
import style from './post.style.js';
import Photo from './photo';
const Post = React.createClass({
    render: function() {
        return (
                <div style={style.postContainer}>
                    <div style={style.avatar}><img src="mz.jpg" style={style.avatarImage}/></div>
                    <div style={style.post}>
                        <p style={style.paragraph}>{this.props.children}</p>
                        {this.props.photos.map( (photo) => {
                            return <Photo key={photo.hash} hash={photo.hash} />
                        })}
                    </div>
                </div>
        );
    }
});

export default Post;