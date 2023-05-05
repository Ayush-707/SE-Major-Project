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

export const GetAccountInfo = async(data) => {
    return await commonrequest("POST", `${BACKEND_URL}/User/Home`, data);
}


export const Transact = async(data) => {
    return await commonrequest("POST", `${BACKEND_URL}/User/Transaction`, data)
}

export const TransactRec = async(data) => {
    return await commonrequest("POST", `${BACKEND_URL}/User/TransactRec`, data)
}

export const accA = async() => {
    
    const url = `${BACKEND_URL}/User/UserA`;
    return await commonrequest("GET", url);
}

export const accB= async(data) => {
    
    const url = `${BACKEND_URL}/User/UserB`;
    return await commonrequest("PATCH", url, data);
}

export const accC = async(data) => {

    const url = `${BACKEND_URL}/User/UserC`;
    return await commonrequest("POST",url,data);
}
