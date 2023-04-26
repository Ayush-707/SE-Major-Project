import { commonrequest }  from "../APIcall";
import { BACKEND_URL } from "../helper";


export const RequestNewAccount = async(data) => {
    return await commonrequest("POST", `${BACKEND_URL}/User/New-Account`, data);
}