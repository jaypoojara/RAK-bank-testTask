import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ResultScreen from '../result';
import { AppStackParams } from '../../../App';

const Stack = createStackNavigator<AppStackParams>();

const MockNavigator = ({
  initialRoute,
  routeParams,
}: {
  initialRoute: keyof AppStackParams;
  routeParams: any;
}) => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name={initialRoute} component={ResultScreen} initialParams={routeParams} />
    </Stack.Navigator>
  </NavigationContainer>
);

describe('ResultScreen', () => {
  it('renders correctly', () => {
    const route = {
      params: {
        totalScore: 13,
      },
    };
    const routeParams = { totalScore: 50 };
    const { getByText } = render(<MockNavigator initialRoute="Result" routeParams={routeParams} />);
    expect(getByText('Your Score')).toBeTruthy();
    expect(getByText('Go to Home')).toBeTruthy();
  });
});
