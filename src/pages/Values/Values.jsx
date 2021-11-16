import React from 'react'
import './Values.scss'
import Session from '../../components/Session/Session'
import { valuescontent } from '../../data'


export default function Values() {
    return (
        <div className="valuesInner">
        {
            valuescontent.map((item)=>{
                return (
                  <Session key={item.id} title={item.title} content={item.content}></Session>
                )
            })
        }
        </div>
    )
}
