import {NavLink} from 'react-router-dom'
import React from "react";

export default class Navigation extends React.Component {
  state = {
    selectKey:''
  };
  
  handleCheckedItem = ({id}) => {
    this.setState({
      selectKey:id
    })
  }

  render() {
    let navList = [{
        id:0,
        navName:'主页',
        navPath:'/?tab=all',
    },{
        id:1,
        navName:'商品中心',
        navPath:'/shopcenter'
    },
    {
        id:3,
        navName:'在售商品管理',
        navPath:'/manageCommodity'
    },{
        id:4,
        navName:'商品分类',
        navPath:"/sorted"
    },
    // {
    //     id:5,
    //     navName:'成交订单',
    //     navPath:'/deal'
    // }
    ,{
        id:6,
        navName:'待制作订单',
        navPath:'/tobeMade'
    },{
        id:7,
        navName:'已完成订单',
        navPath:'/Orderdone'
    },{
        id:8,
        navName:'会员中心',
        navPath:'/memberCenter'
    },{
        id:9,
        navName:'评论管理',
        navPath:'/managecomment'
    }]
    return (
        <div className="navigate">
        <ul>
        {navList.map((item,index)=>{
          return <NavLink to ={item.navPath}>
          <li onClick={()=>this.handleCheckedItem(item)} >{item.navName}</li>
          </NavLink>
        })}
      </ul>
      </div>
      // style={{background:this.state.selectKey===item.id?'#fff':'none'}}
    );
  }
}
{/* <li onClick={()=>this.handleCheckedItem(item)} style={{background:this.state.selectKey===item.id?'#fff':'none'}}>{item.navName}</li> */}