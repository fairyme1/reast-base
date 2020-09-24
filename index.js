// 创建组件，虚拟DO吗，生命周期
import React from 'react'
// 展示创建好的组件和虚拟Dom
import ReactDom from 'react-dom'

import Hello from '@/components/Hello'
import CmtList from '@/components/CmtList'

import './class组件base'

// 标签 元素，属性，子节点，其他子节点
// const myh1 = React.createElement('h1',{id:'myh1',title:'this is a title'},'这是个大大的h1')
// const mydiv = React.createElement('div',null,'这是div 元素',myh1 )

// const mydiv =<div id='myid' title='babel le'> 这是打打的h1</div>

let a = 10
let  str = 'hello'
let bool = true
let title = 'this is a ...'
let h2 = <h2>这话大大发放</h2>
let  arr = [
    <h1>kkkkkkk</h1>,
    <h2>jjxxxmmc</h2>
]

// 循环数组改变值
const arrstr =['毛利兰','柯南','小五粮','灰原哀','皮卡卡']
const nameArr = []
arrstr.forEach(item =>{
const temp = <h5>{item}</h5>
nameArr.push(temp)
})

const namearrs = arrstr.map(
    item=>{
        return item+'~~~'
    }
)
// 1 组件-function,第一种方式
// 2 组件class（es6）-第二种方式


const dog = {
    name: '大黄',
    age: 16
}

console.log("---------calss-组件挂载分割线------------")

class Movie extends React.Component {
    constructor(){
        super()
        this.state = {
            msg: '赛猴雷。。。。',
            commentList: [
                {id: 1,user: '天气', content: '今天雨好大啊'},{id: 2,user: '晴天', content: '今天有雷'},{id: 3,user: '雨天', content: '还要上班呢'}
            ]
        }
    }

    render() {
    this.state.msg = '修改了msg'

    return <div>

        <h1>评论列表组价</h1>
    {this.state.commentList.map(item =>
           <CmtItem {...item } key = {item.id}></CmtItem> 
    )}

    </div>
    }
}


ReactDom.render(<div>
{/* {a+4}
{str}
// <h1/> */}
 {/* <p className = "mystyle" title={title}> 这谁</p> */}
{/* {h2}
{arr} */}
{/* {nameArr} */}
{/* {namearrs} */}
{/* {arrstr.map(item => <h3>{item}</h3>)} */}
{/* <Hello name={dog.name} age={dog.age} ></Hello> */}
{/* <Hello {...dog}></Hello> */}
{/* <Movie name= {dog.name} age={dog.age}/> */}
<CmtList></CmtList>

</div>,document.getElementById('app'))

var o1 = {
    age: 18,
    adress: '北京',
    phone: '2122323'
}
var o2 = {
    name: '大华',
    ...o1
}
console.log(o2)