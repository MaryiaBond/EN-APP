import style from './App.module.css'
import React, {useEffect, useState} from 'react'
import {Header} from "./components/Header/Header";
import {games} from './components/Games/AppGames/index'
import {useCookies} from 'react-cookie'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect, NavLink
} from "react-router-dom";
import {Dashboard} from "./components/Dashboard/Dashboard";
import {Library} from "./components/Library/Library";
import {Games} from "./components/Games/Games";
import Store from "./context"
import Learn from "./components/Learn/Learn";

function App() {
    const [library, setLibrary] = useState(localStorage.getItem('library') ? JSON.parse(localStorage.getItem('library')) : [])
    const [wordIndex, setWordIndex] = useState(0)
    const [correct, setCorrect] = useState(0)
    const [error, setError] = useState(0)
    const [cookies, setCookie] = useCookies(['points']);
    const [points, setPoints] = useState(+cookies.points ?? 0)
    // level = constant * sqrt(XP)
    const speak = (word) => {
        const speakInstance = new SpeechSynthesisUtterance(word)
        speakInstance.voice = window.speechSynthesis.getVoices()[5]
        speechSynthesis.speak(speakInstance);
    }

    useEffect(() => {
        cookies.points ? setCookie('points', +points ) : setCookie('points', 0)
    }, [points])

    useEffect(() => {
        setPoints(points + correct)
    }, [correct])

    const store = {playWords: library.slice(-10), speak, correct, setCorrect, error, setError, library}

    const progressBarWidth = {
        width: `${(100 / library.slice(-10).length) * wordIndex}vw`
    }
    return (
        <div className="App">
            <Store.Provider value={store}>
                <Router>
                    <Header/>
                    <Switch>
                        <Redirect exact from="/" to="/dashboard"/>
                        <Route exact path="/dashboard">
                            <Dashboard points={points}/>
                        </Route>

                        <Route path='/library'>
                            <Library library={library} setLibrary={setLibrary}/>
                        </Route>

                        <Route exact path='/games'>
                            <Games library={library} setLibrary={setLibrary}/>
                        </Route>

                        <Route exact path='/learn'>
                            <div className={style.progressBarContainer}>
                                <div className={style.progressBar} style={progressBarWidth}> </div>
                            </div>
                            <nav className={style.gameNav}>
                                <NavLink className={style.btnBack} to='/dashboard'> </NavLink>
                            </nav>
                            <Learn wordIndex={wordIndex} setWordIndex={setWordIndex}/>
                            <div onClick={() => {
                                if (wordIndex !== library.length - 1) {
                                    setWordIndex(wordIndex+1)
                                    speak(library[wordIndex + 1].translate)
                                }  else {
                                    setWordIndex(0)
                                    speak(library[0].translate)
                                }
                            }} className={style.btnNext}> </div>
                        </Route>
                        <Route path="/game">
                            <div className={style.progressBarContainer}>
                                <div className={style.progressBar} style={progressBarWidth}> </div>
                            </div>
                            <nav className={style.gameNav}>
                                <NavLink className={style.btnBack} to='/games'> </NavLink>
                                <ul className={style.results}>
                                    <li>Errors: {error}</li>
                                    <li>Correct: {correct}</li>
                                    <li>Points: {points}</li>
                                </ul>
                            </nav>

                            <section className={style.gameContainer}>
                                {games.map((game, index) => <Route path={`/game/${game.path}`} key={index}>
                                    <game.component wordIndex={wordIndex} setWordIndex={setWordIndex} />
                                </Route>)}
                            </section>
                        </Route>
                    </Switch>
                </Router>
            </Store.Provider>
        </div>
    );
}

export default App;
