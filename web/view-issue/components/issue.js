import React, {PropTypes, Component} from 'react';
import pureComponentUpdate from '../decorators/pure-component-update';

const style = {
    container: {
        padding: 5
    }
};

@pureComponentUpdate
export default class Issue extends Component {
    static propTypes = {
        summary: PropTypes.element.isRequired,
        description: PropTypes.element.isRequired,
        status: PropTypes.element.isRequired
    };

    render() {
        const {summary, description, status} = this.props;
        return (
            <div style={style.container}>
                <div>{status}</div>
                {summary}
                {description}
            </div>
        );
    }
}