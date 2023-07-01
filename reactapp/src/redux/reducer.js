import { combineReducers } from "redux";

const loginReducer = (state = "" ,action) =>{
    switch(action.type){
        case 'LOG_IN':
            return action.payload;
        case 'LOG_OUT':
            localStorage.removeItem("class");
            localStorage.removeItem("login");
            return "";
        default :
            return state
    }
}
const classreducer=(state = {},action)=>{
    switch(action.type){
        case 'CLASS':
            return action.payload;
        case 'LOG_OUT':
            return {}
        default :
            return state
    }
}
const reducers = combineReducers({
    login:loginReducer,
    class:classreducer,
})

export default reducers