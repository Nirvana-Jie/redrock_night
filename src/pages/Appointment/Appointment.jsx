import React from 'react'
import Unopen from '../../components/Unopen/Unopen'
import useScrollToTop from '../../hooks/useScrollToTop'
import "./Appointment.scss"

export default function Appointment() {
    useScrollToTop()
    return (
        <div className="appointmentInner">
            <Unopen/>
        </div>
    )
}
