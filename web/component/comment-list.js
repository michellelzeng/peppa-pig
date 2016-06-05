import React from 'react';
import Comment from './comment'

const CommentList = React.createClass({
    render: function() {
       const commentNodes = this.props.data.map((comment) => {
            return <Comment key={comment.id} author={comment.author}>{comment.content}</Comment> ;
       });

       return (<div>
                {commentNodes}
             </div>);
    }
});

export default CommentList;