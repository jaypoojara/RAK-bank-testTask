import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ResultScreen from '../ResultScreen';
import {AppStackParams} from '../../../App';

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
      <Stack.Screen
        name={initialRoute}
        component={ResultScreen}
        initialParams={routeParams}
      />
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
    const routeParams = {totalScore: 50};
    const {getByText} = render(
      <MockNavigator initialRoute="Result" routeParams={routeParams} />,
    );
    expect(getByText('Your Score')).toBeTruthy();
    expect(getByText('Go to Home')).toBeTruthy();
  });

  //   it('displays the correct calculated risk score', () => {
  //     const routeParams = {totalScore: 50};
  //     const {getByText} = render(
  //       <MockNavigator initialRoute="Result" routeParams={routeParams} />,
  //     );
  //     expect(getByText('Thank you!')).toBeTruthy();
  //     // Further verification of the calculatedRisk value can be done if the text includes it
  //   });

  //   it('navigates to Home screen when Go to Home button is pressed', () => {
  //     const routeParams = {totalScore: 50};
  //     const {getByText} = render(
  //       <MockNavigator initialRoute="Result" routeParams={routeParams} />,
  //     );
  //     const goToHomeButton = getByText('Go to Home');
  //     fireEvent.press(goToHomeButton);

  //     // Here you should test the navigation logic if using actual navigation
  //     // For a simple mock, you might need to spy on navigation.navigate
  //   });
});
