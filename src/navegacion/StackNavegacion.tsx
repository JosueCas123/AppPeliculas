import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DateliScreen} from '../screen/DateliScreen';
import {HomeScreen} from '../screen/HomeScreen';
import { Movie } from '../interfaces/movieInterface';

export type RouteParams = {
  Home: undefined;
  DateliScreen: Movie;
}

const Stack = createStackNavigator<RouteParams>();

export const StackNavegacion = () =>  {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown:false,
        cardStyle:{
          //backgroundColor:'white',
        }
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen}
        options={{headerShown:false}}
        
      
      />
      <Stack.Screen name="DateliScreen" component={DateliScreen}
        options={{headerShown:false}}
        
      />
      
    </Stack.Navigator>
  );
}
