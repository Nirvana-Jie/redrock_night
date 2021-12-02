import React from 'react'
import Unopen from '../../../components/Unopen/Unopen'
import useScrollToTop from '../../../hooks/useScrollToTop'
import "./Apply.scss"

export default function Apply() {
    useScrollToTop()
    return (
        <div className="applyInner">
            <Unopen/>
        </div>
    )
}
