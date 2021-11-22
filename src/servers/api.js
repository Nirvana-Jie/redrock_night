import { appointmentAxios } from "./axios";


export const postAppointment = (data)=>{
    return appointmentAxios({
        url:"/appointment",
        data,
        method:"post"
    })
}