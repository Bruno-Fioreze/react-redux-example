import callAxios from "./_base"
import {axiosParameter} from "../types/axios" 

const getUsers = async () => {
    const parameter: axiosParameter = {
        "url": "users"
    }
    return await callAxios(parameter)
}

export default getUsers;