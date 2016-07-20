import React, {PropTypes, Component} from 'react';
import pureComponentUpdate from '../decorators/pure-component-update';

const categoryTextColors = {
    todo: 'white',
    inProgress: 'black',
    done: 'white',
    unknown: 'black'
};

const categoryBackgroundColors = {
    todo: '#0091EA',
    inProgress: '#FEC400',
    done: '#2DB07C',
    unknown: '#CFD4DA'
};

const style = category => ({
    backgroundColor: categoryBackgroundColors[category],
    borderRadius: 4,
    color: categoryTextColors[category],
    display: 'inline-block',
    fontSize: 11,
    fontWeight: 'bold',
    lineHeight: 1,
    padding: '7px 10px',
    textTransform: 'uppercase'
});

@pureComponentUpdate
export default class Status extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        category: PropTypes.string
    };

    static defaultProps = {
        category: 'unknown'
    };

    render() {
        return (
            <span style={style(this.props.category)}>
                {this.props.name}
            </span>
        );
    }
};
