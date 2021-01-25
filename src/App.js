import './App.css';
import React, {useEffect, useState, Component} from 'react'
import {Header} from "./components/Header/Header";
import {CheckIT} from './components/Games/AppGames/CheckIT'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useLocation
} from "react-router-dom";
import {Dashboard} from "./components/Dashboard/Dashboard";
import {Library} from "./components/Library/Library";
import {Games} from "./components/Games/Games";
function App() {
    // const location = useLocation()
    const [currentGame, setCurrentGame] = useState()
    const [library, setLibrary] = useState([{
        word: 'кот',
        translate: 'cat'
    },{
        word: 'кот',
        translate: 'cat'
    },{
        word: 'кот',
        translate: 'cat'
    },{
        word: 'кот',
        translate: 'cat'
    },
    ])
  return (
    <div className="App">
        <Router>
            <Header />
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
                            llkll
                        </Route>
                </Switch>
        </Router>
    </div>
  );
}

export default App;
