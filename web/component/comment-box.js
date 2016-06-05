import React from 'react';
import CommentList from './comment-list';
import CommentForm from './comment-form';

const CommentBox = React.createClass({
        getInitialState: () => (
            {data: []}
        ),

        componentDidMount: function() {
            debugger;
            fetch("/post")
                    .then((response) => response.json())
                    .then((data) => {
                        this.setState({data: data._embedded.post});
                    });
        },

        render: function() {
             return (<div>
                 <h1>Comments</h1>
                 <CommentList data={this.state.data}/>
                 <CommentForm />
             </div>)
        }
    });

export default CommentBox;
