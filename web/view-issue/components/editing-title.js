import React, {PropTypes, Component} from 'react';
import ReactDOM from 'react-dom';
import pureComponentUpdate from '../decorators/pure-component-update';
import EditingButtons from './editing-buttons';
import commonTitleStyle from './common-title.style';

const style = {
    container: {
        display: 'flex',
        flexDirection: 'column'
    },
    inputContainer: {
        flex: '1'
    },
    input: {
        ...commonTitleStyle,
        rows: 5
    },
    buttonContainer: {
        flex: '1',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
};

@pureComponentUpdate
export default class EditingTitle extends Component {
    static propTypes = {
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        onSave: PropTypes.func.isRequired,
        onCancel: PropTypes.func.isRequired
    };

    componentDidMount() {
        ReactDOM.findDOMNode(this.refs.input).focus();
    }

    onChange = (e) => this.props.onChange(e.target.value);
    onSave = () => this.props.onSave();
    onCancel = () => this.props.onCancel();

    render() {
        const {value} = this.props;
        return (
            <div style={style.container}>
                <input style={style.input} value={value} onChange={this.onChange} ref="input"/>
                <div style={style.buttonContainer}>
                    <EditingButtons onSave={this.onSave} onCancel={this.onCancel}/>
                </div>
            </div>
        );
    }
}