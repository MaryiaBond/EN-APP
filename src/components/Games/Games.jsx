import React from 'react';
import {NavLink} from "react-router-dom";
import style from './Games.module.css'

import imgCheckCorrect from './../../assets/img/check-the-correct-one.svg'
import imgSelectTranslation from './../../assets/img/select-translation.svg'
import imgSprintGuess from './../../assets/img/sprint-guess.svg'
import imgPutTranslation from './../../assets/img/put-translation.svg'
import imgSpeakAndCheck from './../../assets/img/speak-and-check.svg'
import imgSprintListen from './../../assets/img/listen-sprint.svg'
import imgRememberTranslation from './../../assets/img/remember-translation.svg'
import imgWriteTranslation from './../../assets/img/write-translation.svg'
import imgListenAndGuess from './../../assets/img/listen-and-guess.svg'

export const Games = () => {
    const games = [
        {img: imgCheckCorrect, path: 'check-it', name: 'Check correct word', description: 'Say the word on the screen and check your spelling'},
        {img: imgWriteTranslation, path: 'write-word', name: 'Write translation', description: 'Say the word on the screen and check your spelling'},
        {img: imgSelectTranslation, path: 'select-translation', name: 'Speak and check', description: 'Say the word on the screen and check your spelling'},

        {img: imgSprintGuess, path: 'sprint-guess', name: 'Speak and check', description: 'Say the word on the screen and check your spelling'},
        {img: imgSpeakAndCheck, path: 'speak-and-check', name: 'Speak and check', description: 'Say the word on the screen and check your spelling'},
        {img: imgPutTranslation, path: 'put-translation', name: 'Speak and check', description: 'Say the word on the screen and check your spelling'},

        {img: imgSprintListen, path: 'listen-sprint', name: 'Speak and check', description: 'Say the word on the screen and check your spelling'},
        {img: imgRememberTranslation, path: 'speak-and-check', name: 'remember-translation', description: 'Say the word on the screen and check your spelling'},
        {img: imgListenAndGuess, path: 'listen-sprint', name: 'listen-and-guess', description: 'Say the word on the screen and check your spelling'},
    ]
    return (
        <section className={style.gameContainer}>
            {games.map((game, index) => (
                <NavLink to={'game/' + game.path} key={index}>
                    <div className={style.gameBlock}>
                        <div>
                            <h2>{game.name}</h2>
                            <p>{game.description}</p>
                        </div>
                        <img src={game.img} alt=""/>
                    </div>
                </NavLink>
            ))}

        </section>
    )
}
