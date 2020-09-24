import React from 'react'
import style from '@/components/Style'

// // 第一层封装
// const  itemStyle ={ border: '1px dashed #ccc',margin: '10px',padding: '10px',boxShadow: '0 0  10px #ccc'}
// const userStyle = { fontSize: '15px' }
// const contentStyle ={ fontSize: '12px' }

export default function CmtItem (props){
    // double ctl d
    return  <div style = {style.item} >
    <h1 style = {style.user}> 评论人：{props.user}</h1>
    <p style = {style.content}>评论内容：{props.content}</p>
    </div>

}