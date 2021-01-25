import React from 'react';
import style from './Dashboard.module.css'
import PlayButton from './../../assets/img/play.svg'

export const Dashboard = () => {
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

                <h3>263 points</h3>
            </div>
            <div className={style.levelBlock}>
                <span>Level</span>

                <h3>7 Level</h3>

                <p>
                    Learn 750 new words in one course
                </p>

                <div className={style.levelBackground}>
                </div>
            </div>
        </section>
    )
}
