import { useRef } from "react";
import { Animated } from 'react-native';


export const useAnimate = () => {
    const opacity = useRef( new Animated.Value(0)).current;

    const fedeIn = ( callback?: Function ) =>{
        Animated.timing(
            opacity,
            {
                toValue:1,
                duration:300,
                useNativeDriver:true
            }
        ).start(() => callback? callback() : null)
    }
    const fedeDut = (duration: number = 300) =>{
        Animated.timing(
            opacity,
            {
                toValue:0,
                duration,
                useNativeDriver:true
            }
        ).start()
    }
    
    return{
        opacity,
        fedeIn,
        fedeDut
    }
}
