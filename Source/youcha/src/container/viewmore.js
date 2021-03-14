import React, {Component} from 'react';
import {Link} from 'react-router-dom'
export default class viewmore extends Component{
    
    constructor(props){
        super(props)
        this.state={
            drinkId:'',
            dame:'',
            userId:'',
            uname:'',
            star:'',
            tname:''
        }
    }

    componentDidMount(){
        const id = this.props.match.params.assId
        fetch('/api/youcha/assessment/getAssById?assId='+id)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({star:res.star,drinkId:res.drinkId})
            fetch('/api/youcha/order/getOrderByAssId?assId='+id)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({
                    userId:res.userId
                })
                fetch('/api/youcha/user/getUserByUserId?userId='+res.userId)
                .then((res)=>res.json())
                .then((res)=>{
                    this.setState({uname:res.uname})
                })
            })
            fetch('/api/youcha/drink/getDrinkByDrinkId?drinkId='+res.drinkId)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({
                    dname:res.dname
                })
                fetch('/api/youcha/type/getTypeByTypeId?typeId='+res.typeId)
                .then((res)=>res.json())
                .then((res)=>{
                    this.setState({
                        tname:res.tname
                    })
                })
            })
        })
        
    }

    render(){
        const {drinkId,star,dname,userId,uname,tname} = this.state
        return(
            <div className="vMore">
                <h2> 评论详情查看</h2>
                <div style={{height:"25%"}}>
                    <h3>商品信息</h3>
                    <ul>
                        <li>商品id:{drinkId}</li>
                        <li>商品名称:{dname}</li>
                        <li>商品分类:{tname}</li>
                    </ul>
                </div>
                <div style={{height:"25%"}}>
                    <h3>用户信息</h3>
                    <ul>
                        <li>用户id:{userId}</li>
                        <li>用户昵称:{uname}</li>
                        <li>用户评分:{star}</li>
                    </ul>
                </div>
                <Link to='/managecomment'>
                <button type="button" style={{marginLeft:'0%'}}>确定</button>
                </Link>
            </div>
        )
    }
} 