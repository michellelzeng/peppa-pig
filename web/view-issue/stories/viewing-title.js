import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import ViewingTitle from '../components/viewing-title';

storiesOf('ViewingTitle', module)
    .add('with text', () => (
        <ViewingTitle value="This is some text being edited" onClick={action('onClick')}/>
    ))
    .add('without text', () => (
        <ViewingTitle value="" onClick={action('onClick')}/>
    ));