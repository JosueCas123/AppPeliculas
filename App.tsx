import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavegacion} from './src/navegacion/StackNavegacion';
import { FadeScreen } from './src/screen/FadeScreen';
import { GradientProvider } from './src/contex/GredientContext';

const AppState = ({children}: any) =>{
        return (
          <GradientProvider>
            {children}
          </GradientProvider>
        )
}

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <StackNavegacion/>

      </AppState>
      {/* <FadeScreen/> */}

    </NavigationContainer>
  )
}

export default App;