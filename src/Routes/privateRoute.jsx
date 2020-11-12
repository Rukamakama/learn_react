import {Route, Redirect} from "react-router-dom";

import React, {useContext} from 'react';
import {LoginContext} from "../Contexts/LoginContext";
import {POST_OWNER, STR_ABOUT, STR_HOME, STR_POST} from "../Constants/strings";
import Header from "../Components/Header";
import './index.css'

const PrivateRoute = ({component: Component, ...rest}) => {
    const {authed} = useContext(LoginContext)
    console.log(authed)
    return (
        <div className='App'><Header name={POST_OWNER} navItems={[STR_HOME, STR_ABOUT, STR_POST]}/>
            <Route
                {...rest}
                render={(props) =>
                    authed ? (
                        <Component {...props} />
                    ) : (
                        <Redirect
                            to={{pathname: "/login", state: {from: props.location}}}
                        />
                    )
                }
            />
        </div>
    );
};

export default PrivateRoute;