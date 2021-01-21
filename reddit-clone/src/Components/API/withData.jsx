import axios from "axios";

export const withData = async(url,request,data) => {
    try {
        const response = await axios({method:request,url:`http://localhost:5000/${url}`,data,withCredentials:true});
        const result = await response;
        return result;
    } catch (err) {
       
        return err.response;
    }
}