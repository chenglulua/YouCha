import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class viewOrder extends Component{
    constructor(props){
        super(props);
        this.state={
            oid:'',
            status:'',
            total:'',
            time:'',
            code:'',
            userId:'',
            uname:'',
            phone:'',
            data:[]

        }
    }

   

    componentDidMount(){
        const id = this.props.match.params.oid
        const status = this.props.match.params.status

        fetch('/api/youcha/order/getOrderByOIdAndStatus?oId='+id+"&&status="+status)
        .then((res)=>res.json())
        .then((res)=>{
            if(res[0][0].status){
                this.setState({status:'已完成'})
            }else{
                this.setState({status:'待制作'})
            }
            fetch('/api/youcha/user/getUserByUserId?userId='+res[0][0].userId)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({
                    userId:res.userId,
                    uname:res.uname,
                    phone:res.phone
                })
            })

            res[0].map((item,index)=>{
                fetch('/api/youcha/drink/getDrinkByDrinkId?drinkId='+item.drinkId)
                .then((res)=>res.json())
                .then((res)=>{
                    this.setState({
                        data:this.state.data.concat({
                            drinkId:item.drinkId,
                            obrix:item.obrix,
                            otemp:item.otemp,
                            osize:item.osize,
                            oextra:item.oextra,
                            num:item.num,
                            dname:res.dname
                        })
                    })
                })
                // .catch(error => {
                //     alert("出现错误,返回上一页")
                //     this.props.history.go(-1)
                // })
                
            })

            this.setState({
                oid:res[0][0].oid,
                time:res[0][0].time,
                code:res[0][0].code,
                total:res[0][0].tprice
            })
        })
        .catch(error => {
            alert("出现错误,返回上一页")
            this.props.history.go(-1)
        })
    }


    
    componentWillUnmount = () => {
        this.setState = (state,callback)=>{
        return;
        };
    }
 

    render(){
        
        const {oid,status,total,time,code,userId,uname,phone,data} = this.state
        return(
            <div className="oview">
                <h2>订单查看</h2>
                <div>
                    <h3>基础信息</h3>
                    <ul>
                        <li>订单号:{oid}</li>
                        <li>订单状态:{status}</li>
                        <li>合计金额:共{total}元</li>
                        <li>订单提交时间:{time}</li>
                        <li>取货码:{code}</li>
                    </ul>
                </div>
                <div style={{height:"15%"}}>
                    <h3>用户信息</h3>
                    <ul>
                        <li>用户id：{userId}</li>
                        <li>用户昵称：{uname}</li>
                        <li>用户手机号：{phone}</li>
                    </ul>
                </div>
                <div style={{height:"25%"}}>
                    <h3>商品信息</h3>
                    <div className="showScroll" style={{width:'80%',height:"60%",margin:"-4% auto",boxShadow:'none'}}>
                        <table border="" cellSpacing="0" cellPadding="" >
                            <tbody>
                            <tr>
                                <th>商品id</th>
                                <th>商品名称</th>
                                <th>甜度</th>
                                <th>温度</th>
                                <th>规格</th>
                                <th>小料</th>
                                <th>数量</th>
                            </tr>
                            {
                                data.map((item)=>(
                                    <tr>
                                        <td>{item.drinkId}</td>
                                        <td>{item.dname}</td>
                                        <td>{item.obrix}</td>
                                        <td>{item.otemp}</td>
                                        <td>{item.osize}</td>
                                        <td>{item.oextra}</td>
                                        <td>{item.num}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                        </table>
                    </div>
                    
                </div>
                    <button type="button" onClick={this.props.history.goBack}>确定</button>
            </div>
        )
    }
}