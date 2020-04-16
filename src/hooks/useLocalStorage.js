import { useState } from "react"

export const useLocalStorage = (key, intialValue) => {
    const [storedValue, setStoredValye] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });

    const handleSetter = (result) => {
        window.lostStorage.setItem(key, JSON.stringify(!storedValue));
        setStoredValue(!storedValue);
    };

    reurn [storedValue, handleSetter];
};