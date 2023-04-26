import { commonrequest }  from "../APIcall";
import { BACKEND_URL } from "../helper";


export const CustCare = async(data) => {
    return await commonrequest("POST", `${BACKEND_URL}/User/Contact`, data)
}
<<<<<<< HEAD
export const Investment = async(data) => {
    return await commonrequest("POST", `${BACKEND_URL}/User/Investment`, data)
}

=======

export const RequestNewAccount = async(data) => {
    return await commonrequest("POST", `${BACKEND_URL}/User/New-Account`, data);
}
>>>>>>> 35469099edcfeebdfc100fc294c5e7cce1cec116
