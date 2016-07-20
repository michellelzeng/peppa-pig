import React, {PropTypes, Component} from 'react';
import pureComponentUpdate from '../decorators/pure-component-update';

const buttonStyle = {
    border: 0,
    borderRadius: 4,
    boxSizing: 'border-box',
    color: 'white',
    cursor: 'pointer',
    height: 28,
    marginLeft: 5,
    padding: 0,
    textAlign: 'center',
    width: 28
};

const style = {
    buttonContainer: {
        marginTop: -5,
        height: 0
    },
    saveButton: {
        ...buttonStyle,
        backgroundColor: '#48CC8C'
    },
    cancelButton: {
        ...buttonStyle,
        backgroundColor: '#D93A35'
    }
};

@pureComponentUpdate
export default class EditingButtons extends Component {
    static propTypes = {
        onSave: PropTypes.func.isRequired,
        onCancel: PropTypes.func.isRequired
    };

    render() {
        const {onSave, onCancel} = this.props;
        return (
            <div style={style.buttonContainer}>
                <button style={style.saveButton} onClick={onSave}>
                    <span className="aui-icon aui-icon-small aui-iconfont-success">Save</span>
                </button>
                <button style={style.cancelButton} onClick={onCancel}>
                    <span className="aui-icon aui-icon-small aui-iconfont-close-dialog">Cancel</span>
                </button>
            </div>
        );
    };
}