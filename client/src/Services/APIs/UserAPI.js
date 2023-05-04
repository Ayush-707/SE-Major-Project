import { commonrequest }  from "../APIcall";
import { BACKEND_URL } from "../helper";


export const CustCare = async(data) => {
    return await commonrequest("POST", `${BACKEND_URL}/User/Contact`, data)
}


export const RequestNewAccount = async(data) => {
    return await commonrequest("POST", `${BACKEND_URL}/User/New-Account`, data);
}

export const InvestAccount = async(data) => {
    return await commonrequest("POST", `${BACKEND_URL}/User/InAccount`, data);
}

export const Transact = async(data) => {
    return await commonrequest("POST", `${BACKEND_URL}/User/Transaction`, data)
}


