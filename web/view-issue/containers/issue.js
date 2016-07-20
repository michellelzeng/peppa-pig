import Rx from 'rxjs';
import {createElement} from 'react';
import Issue from '../components/issue';
import Status from '../components/status';

export default ({summaryFieldContainer, descriptionFieldContainer}) =>
    ({issue$, editedIssue$}) => {
        const summary$ = issue$.pluck('summary');
        const description$ = issue$.pluck('description');

        const editedSummary$ = new Rx.Subject();
        const editedDescription$ = new Rx.Subject();

        Rx.Observable.merge(
            editedSummary$.map(summary => ({summary})),
            editedDescription$.map(description => ({description}))
        ).subscribe(editedIssue$);

        const status$ = issue$.pluck('status');

        const summaryField$ = summaryFieldContainer({value$: summary$, editedValue$: editedSummary$});
        const descriptionField$ = descriptionFieldContainer({value$: description$, editedValue$: editedDescription$});
        const statusField$ = status$.map(status => createElement(Status, {name: status.name, category: status.category}));

        return Rx.Observable.combineLatest(
            [summaryField$, descriptionField$, statusField$],
            (summary, description, status) => createElement(Issue, {summary, description, status})
        );
    };
