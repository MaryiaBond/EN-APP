import React, {useContext, useEffect} from 'react';
import Store from "../../context";

export const Learn = ({setWordIndex, wordIndex}) => {
    const store = useContext(Store)
    useEffect(() => {
        setWordIndex(0)
        return () => setWordIndex(0)
    }, [])
    return (
        <div>
            <span>{store.library[wordIndex].word}</span>
            <h3>{store.library[wordIndex].translate}</h3>
        </div>
    )
}

export default Learn