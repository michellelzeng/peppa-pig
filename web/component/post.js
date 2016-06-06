import React from 'react';

const Post = React.createClass({
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

export default Post;