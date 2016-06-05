import React from 'react';
import Comment from './comment'

const CommentList = React.createClass({
    render: function() {
       const commentNodes = this.props.data.map((comment) => {
            return <Comment key={comment.key} author={comment.title}>{comment.content}</Comment> ;
       });

       return (<div>
                {commentNodes}
             </div>);
    }
});

export default CommentList;