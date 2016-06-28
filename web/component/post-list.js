import React from 'react';
import Post from './post'

const PostList = React.createClass({
    render: function() {
       if(this.props.status === 'loading') {
           return (
               <div>
                   Loading...
               </div>
           );
       } 
        
       const postNodes = this.props.data.map((post) => {
            return <Post key={post.key} photos={post.photos}> {post.content}</Post> ;
       });

       return (<div>
                {postNodes}
             </div>);
    }
});

export default PostList;