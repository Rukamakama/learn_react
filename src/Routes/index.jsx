import About from '../Pages/About'
import React from 'react';
import Login from '../Pages/Login';
import PrivateRoute from './privateRoute';
import {Route, Switch} from "react-router-dom";
import CreatePost from '../Pages/CreatePost';
import Home from "../Pages/Home";
import NotFound from "../Pages/notFound";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/login" component={Login}/>
            <PrivateRoute
                path="/about"
                component={About}
            />
            <PrivateRoute
                path="/post"
                component={CreatePost}
            />
            <PrivateRoute
                path="/home"
                component={Home}
            />
            <Route component={NotFound}/>
        </Switch>
    );
};

export default Routes;