import { commonrequest }  from "../APIcall";
import { BACKEND_URL } from "../helper";



export const Withd = async(data) => {
    return await commonrequest("POST", `${BACKEND_URL}/Admin/Withdraw`, data)
}

export const Deposit = async(data) => {
    return await commonrequest("POST", `${BACKEND_URL}/Admin/Deposit`, data)
}

export const GetAccountReq = async() => {
    
    const url = `${BACKEND_URL}/Admin/Requests`;
    return await commonrequest("GET", url);
}

export const AccountReq = async(data) => {
    
    const url = `${BACKEND_URL}/Admin/Approve`;
    return await commonrequest("PATCH", url, data);
}

export const createNew = async(data) => {

    const url = `${BACKEND_URL}/Admin/Create`;
    return await commonrequest("POST",url,data);
}

export const addEmployee = async (data) => {
    const url = `${BACKEND_URL}/Admin/Add`;
    
    return await commonrequest("POST", url, data);
};

export const GetAccountInfoEmployee = async(data) => {
    return await commonrequest("POST", `${BACKEND_URL}/Admin/Home`, data);
}







export const GetInvest = async() => {
    
    const url = `${BACKEND_URL}/Admin/Invest`;
    return await commonrequest("GET", url);
}

export const InvForm = async(data) => {
    
    const url = `${BACKEND_URL}/Admin/InvestF`;
    return await commonrequest("PATCH", url, data);
}

export const createAcc = async(data) => {

    const url = `${BACKEND_URL}/Admin/CreateA`;
    return await commonrequest("POST",url,data);
}

