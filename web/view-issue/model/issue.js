import Rx from 'rxjs';

const statusCategoryKeyMapping = {
    new: 'todo',
    indeterminate: 'inProgress',
    done: 'done',
    undefined: 'unknown'
};

export default ({issueId, contextPath, editedIssue$}) => {
    const url = `${contextPath}/rest/api/2/issue/${issueId}`;

    const getOptions = {
        method: 'GET',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    };

    const getIssue$ = Rx.Observable.fromPromise(fetch(url, getOptions))
        .switchMap(response => Rx.Observable.fromPromise(response.json()))
        .map(json => ({
            summary: json.fields.summary,
            description: json.fields.description,
            status: {
                name: json.fields.status.name,
                category: statusCategoryKeyMapping[json.fields.status.statusCategory.key]
            }
        }));

    const getPutOptions = (issue) => {
        return {
            ...getOptions,
            method: 'PUT',
            body: JSON.stringify({
                fields: {
                    summary: issue.summary,
                    description: issue.description
                }})
        }
    };

    editedIssue$
        .concatMap(issue => Rx.Observable.fromPromise(fetch(url, getPutOptions(issue))))
        .subscribe(() => console.log('request sent'));

    const optimisticIssue$ = getIssue$.merge(editedIssue$).scan((issue, editedIssue) => ({...issue, ...editedIssue}));

    const issue$ = new Rx.ReplaySubject(1);
    optimisticIssue$.subscribe(issue$);
    return issue$;
};
