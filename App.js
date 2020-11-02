import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './source/pages/home';
import RecipePage from './source/pages/recipe';
import {FavoriteProvider} from './source/helpers/favoriteContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <FavoriteProvider>    
        <Stack.Navigator>
          <Stack.Screen name="HomePage" component={HomePage} options={{title:"", headerStyle: {height:0}}} />
          <Stack.Screen name="RecipePage" component={RecipePage} options={{title:"", headerLeft: null,gesturesEnabled: false, headerStyle:{height:0}}}  />
        </Stack.Navigator>
      </FavoriteProvider>
    </NavigationContainer>
  );
}