import style from './App.module.css'
import React, {useEffect, useState, useContext} from 'react'
import {Header} from "./components/Header/Header";
import {CheckIT as CheckIT} from './components/Games/AppGames/CheckIT'
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

function App() {
    // const location = useLocation()

    const [library, setLibrary] = useState(localStorage.getItem('library') ? JSON.parse(localStorage.getItem('library')) : [])
    const [wordIndex, setWordIndex] = useState(0)
    // const store = useContext(currentPlayWords);
    useEffect(() => {
        // setCurrentPlayWords(library.slice(-10))
    }, [])
    const progressBarWidth = {
        width: `${(100 / library.slice(-10).length) * wordIndex}vw`
    }
    return (
        <div className="App">
            <Store.Provider value={library.slice(-10)}>
                <Router>
                    <Header/>
                    <Switch>
                        <Redirect exact from="/" to="/dashboard"/>
                        <Route exact path="/dashboard">
                            <Dashboard/>
                        </Route>

                        <Route path='/library'>
                            <Library library={library} setLibrary={setLibrary}/>
                        </Route>

                        <Route exact path='/games'>
                            <Games library={library} setLibrary={setLibrary}/>
                        </Route>

                        <Route path="/game">
                            <div className={style.progressBarContainer}>
                                <div className={style.progressBar} style={progressBarWidth}></div>
                            </div>
                            <nav className={style.gameNav}>
                                <NavLink className={style.btnBack} to='/games'> </NavLink>
                                <ul className={style.results}>
                                    <li>Errors: 0</li>
                                    <li>Correct: 0</li>
                                    <li>Points: 0</li>
                                </ul>

                            </nav>

                            <section className={style.gameContainer}>
                                <Route path="/game/check-it">
                                    <CheckIT wordIndex={wordIndex}
                                             setWordIndex={setWordIndex}/>
                                </Route>
                                <Route path="/game/select-translation">
                                    <CheckIT/>
                                </Route>
                            </section>

                        </Route>
                    </Switch>
                </Router>
            </Store.Provider>
        </div>
    );
}

export default App;
