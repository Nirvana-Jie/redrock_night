import React from 'react'
import useScrollToTop from '../../hooks/useScrollToTop'
import "./Appointment.scss"
import { useForm } from "react-hook-form";

export default function Appointment() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
      } = useForm();
      const onSubmit = (data) => {
        console.log(JSON.stringify(data));
      };
    useScrollToTop()
    return (
        <div className="appointmentInner">
            <div className="appointmentBox">
                <form className="boxInner" onSubmit={handleSubmit(onSubmit)}>
                  <p>预约报名</p>
                  <p>如果您在申请过程中遇到任何问题，请咨询我们的峰会平台邮箱：fanghongtao@redrock.team</p>
                  <input placeholder="姓名" {...register("name")} type="text"></input>
                  <input placeholder="手机号码" {...register("phone")} type="tel"></input>
                  <input placeholder="邮箱地址" {...register("email")} type="email"></input>
                  <input type="submit" className="submit" value="立即报名"></input>
                </form>
            </div>

        </div>
    )
}
