import { commonrequest }  from "./APIcall";
import { BACKEND_URL } from "./helper";

export const Login = async(data) => {
    return await commonrequest("POST", `${BACKEND_URL}/Login`, data)
}

export const Signup = async(data) => {
    return await commonrequest("POST", `${BACKEND_URL}/Signup`, data)
}