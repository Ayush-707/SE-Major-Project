import { commonrequest }  from "../APIcall";
import { BACKEND_URL } from "../helper";


export const CustCare = async(data) => {
    return await commonrequest("POST", `${BACKEND_URL}/User/Contact`, data)
}

export const Investment = async(data) => {
    return await commonrequest("POST", `${BACKEND_URL}/User/Investment`, data)
}

export const RequestNewAccount = async(data) => {
    return await commonrequest("POST", `${BACKEND_URL}/User/New-Account`, data);
}

