import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import AssetLiabiltyComponent from './AssetLiabiltyComponent';

storiesOf('AssetLiabiltyComponent', module)
    .add('with title', withInfo()(() => (
        <AssetLiabiltyComponent title="AssetLiabiltyComponent title" />
    )));
