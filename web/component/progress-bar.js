import React, {Component} from 'react';
import getProgressBarStyle from './progress-bar.style';

const ProgressBar = React.createClass( {
    propTypes: {
        percentage: React.PropTypes.number
    },
    defaultPropTypes () {
        return {
            percentage: 0
        }
    },
    render: function() {
        return  (
            <div style={getProgressBarStyle(this.props.percentage)}>
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
