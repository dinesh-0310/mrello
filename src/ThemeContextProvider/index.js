import React, { createContext, useEffect, useState } from 'react';
import { saveData,loadData } from '../localStorage';


const theme={
    green:{
        headerBackground : "#40A35B",
        headerColor: "white",
        boardBackground: "#4BBF6B",
        listBackground : "#40A35B"
    },
    light : {
        headerBackground : "#37474f",
        headerColor: "white",
        boardBackground: "white",
        listBackground : "#37474f"
    },
    dark : {
        headerBackground : "#eeeeee",
        headerColor: "#37474f",
        boardBackground: "#121212",
        listBackground : "#eeeeee" 
    }
}
export const ThemeContext = createContext();

export const ThemeContextProvider = ({children})=>{
    const [appTheme, setAppTheme] = useState(loadData('theme') || theme.green);
    useEffect(()=>{
        saveData('theme', appTheme)
    },[appTheme])
    const setGreen = ()=>{
        setAppTheme(theme.green)
    }
    
    const setLight = () =>{
        setAppTheme(theme.light)
    }
    
    const setDark = () =>{
        setAppTheme(theme.dark)
    }
    return(
        <ThemeContext.Provider value={{appTheme, setDark, setGreen, setLight}}>
            {children}
        </ThemeContext.Provider>
    )
}