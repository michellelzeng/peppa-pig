import Rx from 'rxjs';

export default ({editingFieldContainer, viewingFieldContainer}) =>
    ({value$, editedValue$}) => {
        const click$ = new Rx.Subject();
        const save$ = new Rx.Subject();
        const cancel$ = new Rx.Subject();

        const editMode$ = click$;
        const viewMode$ = save$.merge(cancel$).startWith(null);

        return Rx.Observable
            .merge(
                editMode$.map(() => editingFieldContainer({
                    save$,
                    cancel$,
                    value$,
                    editedValue$
                })),
                viewMode$.map(() => viewingFieldContainer({
                    value$,
                    click$
                }))
            )
            .switch();
    };
