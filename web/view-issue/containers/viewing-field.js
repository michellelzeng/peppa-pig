import {createElement} from 'react';

export default ({component}) =>
    ({value$, click$}) => {
        return value$.map(value => createElement(component, {
            value,
            onClick: () => click$.next()
        }));
    };
