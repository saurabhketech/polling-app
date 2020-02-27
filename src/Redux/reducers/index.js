import { combineReducers } from "redux";
import register from "./register/register"
import login from "./login/login";
import pols from "./pols/pols";
import polsUpdate from  "./pols/updatepol";
const rootReducer = combineReducers({
    register: register,
    login: login,
    pols: pols,
    polsUpdate: polsUpdate
});

export default rootReducer;