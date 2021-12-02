import { appointmentAxios } from "./axios";


export const postAppointment = (data)=>{
    return appointmentAxios({
        url:"geeksummit/sign",
        data,
        method:"post",
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })
}