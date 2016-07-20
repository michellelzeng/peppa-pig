import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import EditingTextarea from '../components/editing-textarea';

storiesOf('EditingTextarea', module)
    .add('with text', () => (
        <EditingTextarea value="This is some text being edited" onChange={action('onChange')} onSave={action('onSave')} onCancel={action('onCancel')}/>
    ))
    .add('without text', () => (
        <EditingTextarea value="" onChange={action('onChange')} onSave={action('onSave')} onCancel={action('onCancel')}/>
    ));