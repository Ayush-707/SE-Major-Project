import { commonrequest }  from "../APIcall";
import { BACKEND_URL } from "../helper";


export const WithdrawCall = async(data) => {
    return await commonrequest("POST", `${BACKEND_URL}/Admin/Withdraw`, data)
}