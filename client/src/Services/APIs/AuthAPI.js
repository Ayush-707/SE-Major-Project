import { commonrequest }  from "../APIcall";
import { BACKEND_URL } from "../helper";

export const Login = async(data) => {
    return await commonrequest("POST", `${BACKEND_URL}/User/Login`, data)
}

export const Signup = async(data) => {
    return await commonrequest("POST", `${BACKEND_URL}/User/Signup`, data)
}

export const adminLogin = async(data) => {
    const url = `${BACKEND_URL}/Admin/Auth`
    return await commonrequest("POST",url, data)
}

export const updateOTP = async (data) => {
    const url = `${BACKEND_URL}/Admin/myotp`

    return await commonrequest("PATCH", url, data);
}

export const checkOTP = async (eMail,otp) => {

    console.log("okbud")
    const url = `${BACKEND_URL}/Admin/checkotp?email=${eMail}&otp=${otp}`

    return await commonrequest("GET", url);
}
