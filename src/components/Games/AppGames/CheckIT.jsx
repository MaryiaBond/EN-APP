import React, {useState, useContext, useEffect} from 'react';
import style from "./CheckIT.module.css";
import Store from "../../../context";

export const CheckIT = ({setWordIndex, wordIndex}) => {
    const [wordsToCheck, setWordsToCheck] = useState([])

    const getRandomWord = () => {
        // return currentPlayWords[Math.floor((Math.random()*currentPlayWords.length))]
    }

    const currentPlayWords = useContext(Store);
    const [randomWords, setRandomWords] = useState(currentPlayWords)
    const [correct, setCorrect] = useState(0)
    useEffect(() => {
        setRandomWords(currentPlayWords.sort(() => Math.random() - .5))
    }, [])
    useEffect(() => {
         setWordsToCheck([randomWords[wordIndex],
            randomWords[(wordIndex + 1)%randomWords.length],
            randomWords[(wordIndex + 2)%randomWords.length]].sort(() => Math.random() - .5))
    }, [correct])

    const checkWord = (word) => {
        if(word === randomWords[wordIndex].word) {

            setWordIndex(wordIndex+1)
            setCorrect(correct+1)
        } else {

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
