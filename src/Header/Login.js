import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router , Switch, Route, Link, Redirect} from 'react-router-dom';

function Login(){
    return(
        <>
        <Router>
            <Switch>
                <Redirect path ="/login">
                <h1>Login Page</h1>
                </Redirect>
            </Switch>
        </Router>
        </>
    );
}
export default Login;