import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import Issue from '../components/issue';
import ViewingTextarea from '../components/viewing-textarea';
import EditingTextarea from '../components/editing-textarea';
import ViewingTitle from '../components/viewing-title';
import EditingTitle from '../components/editing-title';

storiesOf('Issue', module)
    .add('with viewing summary and viewing description', () => {
        const summary = (
            <ViewingTitle value="I am a summary" onClick={action('summaryClicked')}/>
        );
        const description = (
            <ViewingTextarea value="I am a description" onClick={action('descriptionClicked')}/>
        );

        return (
            <Issue summary={summary} description={description}/>
        );
    })
    .add('with editing summary and viewing description', () => {
        const summary = (
            <EditingTitle value="I am a summary"
                          onChange={action('summaryChange')}
                          onSave={action('summarySave')}
                          onCancel={action('summaryCancel')}
            />
        );
        const description = (
            <ViewingTextarea value="I am a description" onClick={action('descriptionClicked')}/>
        );

        return (
            <Issue summary={summary} description={description}/>
        );
    })
    .add('with viewing summary and editing description', () => {
        const summary = (
            <ViewingTitle value="I am a summary" onClick={action('summaryClicked')}/>
        );
        const description = (
            <EditingTextarea value="I am a description"
                          onChange={action('descriptionChange')}
                          onSave={action('descriptionSave')}
                          onCancel={action('descriptionCancel')}
            />
        );

        return (
            <Issue summary={summary} description={description}/>
        );
    });
