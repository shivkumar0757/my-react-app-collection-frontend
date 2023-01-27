import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import AlHome from './AlHome';

storiesOf('AlHome', module)
    .add('with title', withInfo()(() => (
        <AlHome title="AlHome title" />
    )));
