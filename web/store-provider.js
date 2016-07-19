/**
 * A Redux-specific Provider that, when given a Redux Store, will:
 * 1. Provide the Store's dispatch function to the React context
 * 2. Subscribe to the Store and automatically re-render when the Store changes
 *
 * In order to re-render using the store's current state, a function accepting a state object
 * as its first argument must be the only Child of this Component.
 *
 * This component also supports the passing in of 'strings' to be used in the application
 */

import DispatchProvider from './dispatch-provider';
import React, {Component, PropTypes} from 'react';

export default class StoreProvider extends Component {
    static propTypes = {
        children: PropTypes.func.isRequired,
        store: PropTypes.shape({
            dispatch: PropTypes.func.isRequired,
            subscribe: PropTypes.func.isRequired,
            getState: PropTypes.func.isRequired
        }).isRequired
    };
    
    constructor(props) {
        super(props);
        this.state = props.store.getState();
    }

    componentWillMount() {
        const {store} = this.props;
        this.unsubscribe = store.subscribe(() => {
            this.setState(store.getState());
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const {children, store} = this.props;

        return (
            <DispatchProvider dispatch={store.dispatch}>
                {children(this.state)}
            </DispatchProvider>
        );
    }
}
