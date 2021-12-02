import React from 'react'
import {useHistory} from 'react-router-dom'

export default function ButtonLink(props) {
    //  console.log(props);
    const {to,children,className} = props 
    const history = useHistory();
    function toLocation(location) {
      history.push(location)
    }
    return (
          <button className={className} onClick={e=>toLocation(to)}>{children}</button>
    )
}
/*
使用修改button样式可直接对.buttonlink进行样式的修改
to:路径的跳转
如果想添加样式的话可以用类名直接添加，后期有空也可以去看看antd的封装
样式的话太懒了就懒得封装了，大家自行用类名去修改吧
*/
