import axios from "axios";

export const appointmentAxios = axios.create({
    baseURL:"/api",
    timeout:3000,
    headers: {'Content-Type': 'application/json'}
})
appointmentAxios.interceptors.request.use(
    (config) => {
        return config
    },
    (err) => {
        console.log(err)
    }
)

appointmentAxios.interceptors.response.use(
    (config) => {
        console.log(config);
        return config
    },
    (err)=>{
        console.log(err);
    }
)





