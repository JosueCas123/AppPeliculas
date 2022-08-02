import React, { useContext } from 'react'
import { Animated, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GredientContext } from '../contex/GredientContext';
import { useEffect } from 'react';
import { useAnimate } from '../hooks/useAnimate';

interface Props{
    children: JSX.Element | JSX.Element[]
}

export const Gradient = ({children}:Props) => {

  const { color, prvColor, setMainprvcolor } =  useContext(GredientContext);

  const {opacity, fedeIn, fedeDut} = useAnimate()

  useEffect(() => {
    fedeIn(() => {
      setMainprvcolor(color);
      fedeDut(0);
    })
  }, [color])
  

  return (
    <View style={{flex:1}}>
        <LinearGradient
            colors={[prvColor.primary, prvColor.secundary ,'white']}
            style={{...StyleSheet.absoluteFillObject}}
            start={{x: 0.1, y: 0.1}}
            end={{x: 0.5, y: 0.7}}
        />
        <Animated.View
            style={{
              ...StyleSheet.absoluteFillObject,
              opacity,
            }}
        >
            <LinearGradient
            colors={[color.primary, color.secundary ,'white']}
            style={{...StyleSheet.absoluteFillObject}}
            start={{x: 0.1, y: 0.1}}
            end={{x: 0.5, y: 0.7}}
        />
        </Animated.View>
        {children}
    </View>
  )
}
