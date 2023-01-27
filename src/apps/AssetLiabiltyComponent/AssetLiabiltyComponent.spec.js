import React from 'react';
import { mount } from 'enzyme';

import AssetLiabiltyComponent from './AssetLiabiltyComponent';

describe('AssetLiabiltyComponent component', () => {
    it('should match snapshot', () => {
        expect(mount(<AssetLiabiltyComponent />)).toMatchSnapshot();
    });
});
