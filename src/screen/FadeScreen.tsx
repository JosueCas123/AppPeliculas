import React, { useRef } from 'react'
import { Animated, Button, View } from 'react-native'
import { useAnimate } from '../hooks/useAnimate';

export const FadeScreen = () => {

const {opacity, fedeDut, fedeIn} = useAnimate();
   

  return (
      
    <View style={{
        flex:1,
        backgroundColor:'grey',
        justifyContent:'center',
        alignItems:'center'

     }}>
        <Animated.View style={{
            backgroundColor:'#084f6a',
            width:150,
            height:150,
            borderColor:'white',
            borderWidth:10,
            opacity:opacity

        }} />

        <Button
        
            title='FadeIn'
            onPress={() => fedeIn}
        />
        <Button
        
            title='FadeDur'
            onPress={fedeDut}
        />

    </View>
  )
}
