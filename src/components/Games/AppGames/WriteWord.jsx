import React, {useState, useContext, useEffect, useRef} from 'react';
import { useLocation } from 'react-router-dom'
import style from "./AppGames.module.css";
import Store from "../../../context";

export const WriteWord = ({setWordIndex, wordIndex}) => {
    const inputWord = useRef()
    const location = useLocation()

    const getRandomWord = () => {
        // return currentPlayWords[Math.floor((Math.random()*currentPlayWords.length))]
    }

    useEffect(() => {
        inputWord.current.focus()
    }, [])

    const store = useContext(Store);
    const [randomWords, setRandomWords] = useState(store.playWords.sort(() => Math.random() - .5))

    const checkWord = (event) => {
        event.preventDefault()
        if(inputWord.current.value === randomWords[wordIndex].word) {
            setWordIndex(wordIndex+1)
            store.setCorrect(store.correct+1)
            inputWord.current.value = ''
            store.speak(randomWords[wordIndex].translate)
            if(wordIndex === randomWords.length - 1) {
                alert('Good job!')
                setWordIndex(0)
                store.setCorrect(0)
                store.setError(0)
                location.pathname = '/'
            }
        } else {
            store.setError(store.error+1)
        }
    }

    return (
       <div>
            <span>Set translation for: </span>
            <h3>{randomWords[wordIndex].translate}</h3>
           <form onSubmit={checkWord} className={style.writeWordBlock}>
               <input ref={inputWord}/>
               <button className={style.btnOk} type="submit">OK</button>
           </form>
       </div>
    )
}
