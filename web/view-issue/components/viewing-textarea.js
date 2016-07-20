import React, {PropTypes, Component} from 'react';
import pureComponentUpdate from '../decorators/pure-component-update';
import commonTextareaStyle from './common-textarea.style';

@pureComponentUpdate
export default class ViewingTextarea extends Component {
    static propTypes = {
        value: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired
    };

    onClick = () => this.props.onClick();

    render() {
        const {value} = this.props;
        return (
            <div style={commonTextareaStyle} onClick={this.onClick}>{value}</div>
        );
    }
}