import React, { createContext, useState } from 'react';


interface ImagenColor{
    primary:string,
    secundary: string;
}

interface ContextProps{
    color:ImagenColor;
    prvColor:ImagenColor;
    setMaincolor: (color: ImagenColor) => void; 
    setMainprvcolor: (color: ImagenColor) => void; 
}

export const GredientContext = createContext({} as ContextProps );

export const GradientProvider = ({children}:any) =>{

    const [color, setcolor] = useState<ImagenColor>({
        primary:'transparent',
        secundary: 'transparent'
    });

    const [prvColor, setprvColor] = useState<ImagenColor>({
        primary:'transparent',
        secundary: 'transparent'
    });

    const setMaincolor = (color: ImagenColor) => {
        setcolor(color);
    }
    const setMainprvcolor = ( color: ImagenColor ) => {
        setprvColor(color); 
    }


    return(
        <GredientContext.Provider value={{
            color,
            prvColor,
            setMaincolor,
            setMainprvcolor
        }} >
            {children}
        </GredientContext.Provider>
    )
}
