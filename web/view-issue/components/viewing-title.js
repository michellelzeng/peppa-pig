import React, {PropTypes, Component} from 'react';
import pureComponentUpdate from '../decorators/pure-component-update';
import commonTitleStyle from './common-title.style';

@pureComponentUpdate
export default class ViewingTitle extends Component {
    static propTypes = {
        value: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired
    };

    onClick = () => this.props.onClick();

    render() {
        const {value} = this.props;
        return (
            <div style={commonTitleStyle} onClick={this.onClick}>{value}</div>
        );
    }
}