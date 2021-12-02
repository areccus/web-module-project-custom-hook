import {useState} from 'react'
import useLocalStorage from './useLocalStorage'

const useDarkMode = (initialValue) => {
    const [darkMode, setDarkmMode] = useLocalStorage('darkmode',initialValue);

    const toggleMode = (e) => {
        e.preventDefault()
        setDarkmMode(!darkMode)
    }

    return [darkMode, toggleMode];
}

export default useDarkMode