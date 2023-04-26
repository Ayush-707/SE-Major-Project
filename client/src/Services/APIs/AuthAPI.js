import { commonrequest }  from "../APIcall";
import { BACKEND_URL } from "../helper";

export const Login = async(data) => {
    return await commonrequest("POST", `${BACKEND_URL}/User/Login`, data)
}

export const Signup = async(data) => {
    return await commonrequest("POST", `${BACKEND_URL}/User/Signup`, data)
}