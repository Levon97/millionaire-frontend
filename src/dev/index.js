import Home from "./containers/home";
import Registration from "./components/registration.js";
import Login from "./components/login.js";
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import './style.scss'

function Wrapper() {
    return (
    <Router>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/registration">
                <Registration />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            
        </Switch>
    </Router>
    )
}

export default Wrapper;