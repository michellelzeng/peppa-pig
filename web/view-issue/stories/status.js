import React from 'react';
import {storiesOf} from '@kadira/storybook';
import Status from '../components/status';

storiesOf('Status', module)
    .add('To Do, In Progress, Done, Unknown', () => (
        <div>
            <Status name="To Do" category="todo"/>
            <Status name="In Progress" category="inprogress"/>
            <Status name="Done" category="done"/>
            <Status name="Unknown" category="unknown"/>
        </div>
    ))
    .add('Status with no category', () => (
        <Status name="???"/>
    ));
