import React, { useRef,useState } from 'react'
import useScrollToTop from '../../hooks/useScrollToTop'
import "./Appointment.scss"
import { useForm } from "react-hook-form";
import {postAppointment} from "../../servers/api"
import Group15 from "../../assets/images/Group15.png"
import "../../mock"

export default function Appointment() {

  const [successBlock, setSuccessBlock] = useState("block")
  const [successNone, setSuccessNone] = useState("none")
  const [repeatRemind, setRepeatRemind] = useState("none")
  const appointmentBox =useRef(null)
  const remind =useRef(null)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = async(data) => {
   const res = await postAppointment(JSON.stringify(data));
   console.log(res.data);
   switch (res.data.status) {
     case 200:
       setSuccessBlock("none")
       setSuccessNone("block")
       break;
     case 201:
       setRepeatRemind("block")
        break;
     case 404:
       break;   
     default:
       break;
   }
  };
  useScrollToTop()
  return (
    <div className="appointmentInner">
      <div className="appointmentBox" ref={appointmentBox} style={{display:`${successBlock}`}}>
        <div className="boxHeader">
          <p>预约报名</p>
          <p>如果您在申请过程中遇到任何问题，请咨询我们的峰会平台邮箱：fanghongtao@redrock.team</p>
        </div>
        <form className="boxInner" onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="姓名" {...register("name", { required: true, })} type="text"
          ></input>
          {errors?.name?.type === "required" && <span>请填写姓名</span>}
          <input placeholder="手机号码"   {...register("phone", { required: true, })} type="tel"></input>
          {errors?.phone?.type === "required" && <span>请填写手机号码</span>}
          <input placeholder="邮箱地址"  {...register("email", { required: true, })} type="email"></input>
          {errors?.email?.type === "required" && <span>请填写邮箱</span>}
          <input type="submit" className="submit" value="立即报名"></input>
        </form>
        <p className="remind" ref={remind} style={{display:`${repeatRemind}`}}>您已完成预约，请勿重复报名</p>
      </div>
      <div className="successBox" style={{display:`${successNone}`}}>
          <div className="successHeader">
          <img src={Group15} alt=""></img>
        </div>
        <div className="successInner">
          <p>您已完成极客峰会预约报名，我们会在五个工作日内将会议的详细信息发送至您的手机和邮箱，请注意查收！</p>
        </div>
      </div>
    </div>
  )
}
