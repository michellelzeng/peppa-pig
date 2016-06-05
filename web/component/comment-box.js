import React from 'react';
import CommentList from './comment-list';
import CommentForm from './comment-form';
import exampleData from './data';

const CommentBox = React.createClass({
        render: () => (
             <div>
                 <h1>Comments</h1>
                 <CommentList data={exampleData}/>
                 <CommentForm />
             </div>
        )
    });

export default CommentBox;
