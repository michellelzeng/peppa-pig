import React, {Component} from 'react';
import getProgressBarStyle from './progress-bar.style';

const ProgressBar = React.createClass( {
    getInitialState: function() {
        return {percentage: this.props.percentage}
    },

    propTypes: {
        percentage: React.PropTypes.number
    },
    getDefaultProps: function () {
        return {
            percentage: 0
        }
    },

    changeProgress: function(percentage) {
        this.setState({percentage: this.state.percentage + 10});
    },

    componentDidMount: function() {
//        this.changeProgress(100);
//this.setState({percentage: 100});
//        setInterval(this.changeProgress, 1000);
    },

    render: function() {
        return  (
            <div style={getProgressBarStyle(this.state.percentage)}>
            </div>
            )
    }
}
)
export default ProgressBar;

// How to make the progress bar's progress move forward?

// How to render the bar every 1 second?
// * put the progress to the store state, and then listen to the change
// * what if you have multiple progress bar used at the same time?
// * set the percentage as a state of the progress bar. and change the state. How ?
// * you can only change the state inside the component
// * maybe I can pass a function to the progress bar to make it change?
