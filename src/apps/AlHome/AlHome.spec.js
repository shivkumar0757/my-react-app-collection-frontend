import React from 'react';
import { mount } from 'enzyme';

import AlHome from './AlHome';

describe('AlHome component', () => {
    it('should match snapshot', () => {
        expect(mount(<AlHome />)).toMatchSnapshot();
    });
});
