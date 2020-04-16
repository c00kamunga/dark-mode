import { useLocalStorage } from './useLocalStorage';
import React, { useEffect } from 'react';

const useDarkMode = (initialValue) => {
    const [valye, setValue] = useLocalStorage('darkKey', initialValue)

useEffect (() => {
    if (value){
        document.querySelector("body").classList.add("dark-mode");
    } else {
        document.querySelector("body").classList.remove("dark-mode")
    }
}, [value])
return [value, setValue]
}

export default useDarkMode;