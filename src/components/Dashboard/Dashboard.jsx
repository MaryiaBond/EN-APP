import React from 'react';
import style from './Dashboard.module.css'
import PlayButton from './../../assets/img/play.svg'

export const Dashboard = (props) => {
    return (
        <section className={style.dashboardContainer}>
           <div className={style.gameBlock}>
                <p>
                    The most popular game is <br/>
                    <b>Speak IT</b>

                </p>
               <img src={PlayButton} className={style.btnPlay} />

               <button className={style.btnRandom}>
                   Play random game
               </button>
           </div>
            <div className={style.pointsBlock}>
                <span>
                    Common score
                </span>

                <h3>{props.points} points</h3>
            </div>
            <div className={style.levelBlock}>
                <span>Level</span>

                <h3>{(0.2 * Math.sqrt(props.points)).toFixed()} Level</h3>

                <p>
                    Learn 750 new words in one course
                </p>

                <div className={style.levelBackground}>
                </div>
            </div>
        </section>
    )
}