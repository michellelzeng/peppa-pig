import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import EditingTitle from '../components/editing-title';

storiesOf('EditingTitle', module)
    .add('with text', () => (
        <EditingTitle value="This is some text being edited" onChange={action('onChange')} onSave={action('onSave')} onCancel={action('onCancel')}/>
    ))
    .add('without text', () => (
        <EditingTitle value="" onChange={action('onChange')} onSave={action('onSave')} onCancel={action('onCancel')}/>
    ));