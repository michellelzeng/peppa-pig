import React from 'react';

const Comment = React.createClass({
    render: function() {
        return (
                <div>
                    <h2>
                        {this.props.author}
                    </h2>
                        {this.props.children}
                </div>
        );
    }
});

export default Comment;