import axios from "axios";
import {USER_URL} from "../Constants/strings";

const LoginRequest = async (data) => {
    return axios.get(USER_URL, {}).then(res => {
        const {username} = res.data[0];
        const {password} = res.data[0];
        if(username === data.username && password === data.password){
            return 'success';
        }else {
            return 'failed';
        }
    }).catch(err => {
        return err;
    });
};

export default LoginRequest;