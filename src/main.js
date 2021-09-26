import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import firebase from "./firebase"
import Navbar from './components/Navbar'
import Home from "./pages/Home"
import Explore from "./pages/Explore"
import Mercury from "./components/3DModel/Mercury"
import Venus from "./components/3DModel/Venus"
import Earth from "./components/3DModel/Earth"
import Mars from "./components/3DModel/Mars"
import Jupiter from "./components/3DModel/Jupiter"
import Saturn from "./components/3DModel/Saturn"
import Uranus from "./components/3DModel/Uranus"
import Neptune from "./components/3DModel/Neptune"
import MoonLanding from './components/3DModel/MoonLanding';
import Mars2020 from "./components/3DModel/Mars2020"
import Footer from './components/Footer'
import Chatbot from "./components/Chatbot"

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
                <Route path='/mercury' exact component={Mercury} />
                <Route path='/venus' exact component={Venus} />
                <Route path='/earth' exact component={Earth} />
                <Route path='/mars' exact component={Mars} />
                <Route path='/jupiter' exact component={Jupiter} />
                <Route path='/saturn' exact component={Saturn} />
                <Route path='/uranus' exact component={Uranus} />
                <Route path='/neptune' exact component={Neptune} />
                <Route path='/moonlanding' exact component={MoonLanding} />
                <Route path='/mars2020' exact component={Mars2020} />
            </Switch>

            <Chatbot />
            <Footer />

        </Router>
    )
}

export default Main
