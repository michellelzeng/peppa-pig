import React from 'react';
import Post from './post'

const PostList = React.createClass({
    render: function() {
       const postNodes = this.props.data.map((post) => {
            return <Post key={post.key} author={post.title}>{post.content}</Post> ;
       });

       return (<div>
                {postNodes}
             </div>);
    }
});

export default PostList;