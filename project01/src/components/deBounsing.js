import {React, useEffect, useState} from 'react'

export const UseDebounsing = (value, delay = 300)=> {

    const [state, setState] = useState('')
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setState(value)
        }, delay);
        return () => clearTimeout(timer)
    }, [value, delay])
    return state
}

