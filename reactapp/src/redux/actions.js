export const Login =(payloadd)=>{
    return {
        type:"LOG_IN",
        payload:payloadd
    }
}
export const Logout =()=>{
    return {
        type:"LOG_OUT"
    }
}
export const setUser=(payloadd)=>{
    return {
        type:"CLASS",
        payload:payloadd
    }
}