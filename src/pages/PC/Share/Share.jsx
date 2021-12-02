import React from 'react'
import "./Share.scss"
import Unopen from '../../../components/Unopen/Unopen'
import useScrollToTop from '../../../hooks/useScrollToTop'

export default function Share() {
    useScrollToTop()
    return (
        <div className="shareInner">
           <Unopen/>
        </div>
    )
}
