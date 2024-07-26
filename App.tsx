import {StatusBar} from 'react-native';
import React from 'react';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';

import {NavigationContainer} from '@react-navigation/native';
import {colors} from './src/utils/theme';
import {HomeScreen, QuestionsScreen, ResultScreen} from './src/screens';

export type AppStackParams = {
  Home: undefined;
  Questions: undefined;
  Result: {totalScore: number};
};

export type AppNavigationProps = StackNavigationProp<AppStackParams>;

const Stack = createStackNavigator<AppStackParams>();

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={colors.primary} />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Questions" component={QuestionsScreen} />
          <Stack.Screen name="Result" component={ResultScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
