import React from 'react'

import CmtItem from '@/components/CmtItem'

import cssObj from '@/css/cmtList.css'


export default class CmtList extends React.Component {
    constructor(){
        super()
        this.state = {
            commentList: [
                {id: 1,user: '天气', content: '今天雨好大啊'},{id: 2,user: '晴天', content: '今天有雷'},{id: 3,user: '雨天', content: '还要上班呢'}
            ]
        }
    }

    render() {

    return <div>

{/* <h1 style ={{color:'red',fontSize:'35px',fontWeight:200 , textAlign: 'center'}}> 评论列表组价</h1> */}
    <h1 className="cmts" > 评论列表组价</h1>
    {this.state.commentList.map(item =>
        <CmtItem {...item } key = {item.id}></CmtItem> 
    )}

    </div>
    }
}

