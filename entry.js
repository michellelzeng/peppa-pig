import React from "react";
import ReactDOM from "react-dom";

function init(){
    const NewsFeed = React.createClass({
      render: function() {
        return (
          <div>
            Hello, world!
          </div>
        );
      }
    });
    ReactDOM.render(
      <NewsFeed />,
      document.getElementById('app')
    );
}


if (document.readyState === 'complete') {
    init();
} else {
    document.addEventListener('DOMContentLoaded', init);
}