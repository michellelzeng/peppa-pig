/**
 * Many components expect a dispatch function to be available in the React context in order
 * to handle user interaction or other forms of state change.
 *
 * The Provider component allows you to easily specify a dispatch function that will be made available to all its children.
 */
import React, {Component, PropTypes} from 'react';

const DispatchProvider = React.createClass({
    propTypes: {
        dispatch: PropTypes.func.isRequired,
        children: PropTypes.element.isRequired
    },

    childContextTypes: {
        dispatch: PropTypes.func
    },

    getChildContext() {
        return {
            dispatch: this.props.dispatch
        };
    },

    render: function() {
        return this.props.children;
    }
});
export default DispatchProvider;
