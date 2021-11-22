import axios from "axios";
import { baseURL } from "./config";

export const appointmentAxios = axios.create({
    baseURL:baseURL,
    timeout:2000
})
appointmentAxios.interceptors.response.use(
    (config) => {
        console.log(config);
        return config
    },
    (err)=>{
        console.log(err);
    }
)





