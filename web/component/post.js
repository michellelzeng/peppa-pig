import React from 'react';
import style from './post.style.js';
const Post = React.createClass({
    render: function() {
        return (
                <div style={style.postContainer}>
                    <div style={style.avatar}><img src="mz.jpg" style={style.avatarImage}/></div>
                    <div style={style.post}>
                        <p>{this.props.author}</p>
                        <p>{this.props.children}</p>
                        <img src="Matt1.jpg" style={style.image}/>
                        <img src="Matt2.jpg" style={style.image}/>
                        <img src="Matt3.jpg" style={style.image}/>
                        <img src="Matt4.jpg" style={style.image}/>
                    </div>
                </div>
        );
    }
});

export default Post;