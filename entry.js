import React from "react";
import ReactDOM from "react-dom";

function init(){
    const CommentBox = React.createClass({
      render: function() {
        return (
          <div>
            Hello, world! I am a CommentBox.
          </div>
        );
      }
    });
    ReactDOM.render(
      <CommentBox />,
      document.getElementById('todo-list')
    );
}


if (document.readyState === 'complete') {
    init();
} else {
    document.addEventListener('DOMContentLoaded', init);
}