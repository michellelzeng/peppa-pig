import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import ViewingTextarea from '../components/viewing-textarea';

storiesOf('ViewingTextarea', module)
    .add('with text', () => (
        <ViewingTextarea value="This is some text being edited" onClick={action('onClick')}/>
    ))
    .add('without text', () => (
        <ViewingTextarea value="" onClick={action('onClick')}/>
    ));