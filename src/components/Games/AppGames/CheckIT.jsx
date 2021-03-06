import React, {useState, useContext, useEffect} from 'react';
import { useLocation } from 'react-router-dom'
import style from "./AppGames.module.css";
import Store from "../../../context";

export const CheckIT = ({setWordIndex, wordIndex}) => {
    const location = useLocation()
    const [wordsToCheck, setWordsToCheck] = useState([])

    const getRandomWord = () => {
        // return currentPlayWords[Math.floor((Math.random()*currentPlayWords.length))]
    }

    const store = useContext(Store);
    const [randomWords, setRandomWords] = useState(store.playWords)
    useEffect(() => {
        setRandomWords(store.playWords.sort(() => Math.random() - .5))
    }, [])
    useEffect(() => {
         setWordsToCheck([randomWords[wordIndex],
            randomWords[(wordIndex + 1)%randomWords.length],
            randomWords[(wordIndex + 2)%randomWords.length]].sort(() => Math.random() - .5))
    }, [store.correct])

    const checkWord = (word) => {
        if(word === randomWords[wordIndex].word) {
            setWordIndex(wordIndex+1)
            store.setCorrect(store.correct+1)
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
               <ul className={style.btnContainer}>
                   {wordsToCheck.map((word, index) => <li className={style.btnCheck} key={index} onClick={() => checkWord(word.word)}> {word.word} </li>)}
               </ul>
       </div>
    )
}
