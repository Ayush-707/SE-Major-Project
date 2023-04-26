import { commonrequest }  from "../APIcall";
import { BACKEND_URL } from "../helper";



export const WithdrawCall = async(data) => {
    return await commonrequest("POST", `${BACKEND_URL}/Admin/Withdraw`, data)
}

export const DepositCall = async(data) => {
    return await commonrequest("POST", `${BACKEND_URL}/Admin/Deposit`, data)
}



export const GetAccountReq = async() => {
    
    const url = `${BACKEND_URL}/Admin/Requests`;
    return await commonrequest("GET", url);
}


