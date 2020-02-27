import React, { Component } from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import App from '../pages/App';
import Dashboard from "../pages/Dashboard/Dashboard";

const PrivateRoute = ({ dispatch, component, ...rest }) => {
    if (!localStorage.getItem('token')) {
        return (<Redirect to="/" />)
    } else {
        return ( // eslint-disable-line
            <Route {...rest} component={component} />
        );
    }
};

export default class RouterIndex extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <PrivateRoute path="/dashboard" component={Dashboard} />

                    <Route path="/" component={App} />
                </Switch>
            </Router>
        )
    }
}