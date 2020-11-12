import React, {
    createContext,
    useState,
    useEffect,
} from "react";
import PropTypes from "prop-types";
import {useHistory} from "react-router-dom";
import LoginRequest from "../../Services/login";
import Login from "../../Pages/Login";

export const LoginContext = createContext();
const LoginProvider = ({children}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [authed, setAuthenticate] = useState(false)

    const history = useHistory();

    useEffect(() => {
        return () => {
            clearField();
        };
    }, []);

    const clearField = () => {
        setUsername("");
        setPassword("");
    };

    const onUserLogin = async (event) => {
        event.preventDefault();

        const payload = {
            username: username,
            password: password,
        };
        const response = await LoginRequest(payload)
        if (response === 'success'){
            setAuthenticate(true)
            history.push("/home");
        }else if(response === 'failed'){
            setAuthenticate(false)
        }else {

        }
    };

    const onUsernameChange = ({target}) => {
        const {value} = target;
        setUsername(value);
    };

    const onPasswordChange = ({target}) => {
        const {value} = target;
        setPassword(value);
    };

    return (
        <LoginContext.Provider
            value={{
                authed,
                username,
                password,
                setUsername,
                setPassword,
                onUserLogin,
                onUsernameChange,
                onPasswordChange,}}>
            {children}
        </LoginContext.Provider>
    );
}

LoginProvider.propTypes = {
    children: PropTypes.any,
};

LoginProvider.defaultProps = {
    children: <Login />,
};

export default LoginProvider;