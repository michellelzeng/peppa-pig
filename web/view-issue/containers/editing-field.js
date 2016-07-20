import Rx from 'rxjs';
import {createElement} from 'react';

export default ({component}) =>
    ({save$, cancel$, value$, editedValue$}) => {
            const change$ = new Rx.Subject();
            const editingValue$ = value$.first().merge(change$);

            save$.withLatestFrom(editingValue$, (_, value) => value)
                 .subscribe(editedValue$);

            return editingValue$.map(value => createElement(component, {
                    value,
                    onSave: () => save$.next(),
                    onCancel: () => cancel$.next(),
                    onChange: x => change$.next(x)
                }));
        };
