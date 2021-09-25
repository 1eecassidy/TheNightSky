import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import firebase from "./firebase"
import Navbar from './components/Navbar'
import Home from "./pages/Home"
import Explore from "./pages/Explore"
import Footer from './components/Footer'

function Main() {

    const handleLogout = () => {
        firebase.auth().signOut();
    }

    return (
        <Router>
            <Navbar handleLogout={handleLogout} />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/explore' exact component={Explore} />
                {/* <Route path='/chatroom' exact component={Chatroom} /> */}
            </Switch>

            <Footer />

        </Router>
    )
}

export default Main
