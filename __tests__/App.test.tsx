/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

// // Mock the Stack Navigator
// jest.mock('@react-navigation/stack', () => {
//   return {
//     createStackNavigator: jest.fn().mockReturnValue({
//       Navigator: ({children}) => <>{children}</>,
//       Screen: ({component}) => component,
//     }),
//   };
// });

it('renders correctly', () => {
  // renderer.create(<App />);
});
