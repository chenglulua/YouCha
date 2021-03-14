import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import {Button,Table} from 'antd'
export default class Orderdone extends Component{
    constructor(props){
        super(props);
        this.state = {
            inpValue : '',
            current:1,
            pageSize:4,
            defaultCurrent:2,
            showQuickJumper:true,
            data:[],
            low:'',
            high:''
        }
        this.fenye = this.fenye.bind(this)
        this.changePage = this.changePage.bind(this)
        this.onShowSizeChange = this.onShowSizeChange.bind(this)
    }

    componentDidMount(){
        var compare = function (prop) {
            return function (obj1, obj2) {
                var val1 = obj1[prop];
                var val2 = obj2[prop];if (val1 < val2) {
                    return -1;
                } else if (val1 > val2) {
                    return 1;
                } else {
                    return 0;
                }            
            } 
        }
        fetch('/api/youcha/order/getOrderByStatus?status=1')
        .then((res)=>res.json())
        .then((res)=>{
            if(res.length!==0){
                this.setState({data:[res[0]]})
                for(var i=1;i<res.length;i++){
                    if(res[i].oid!==res[i-1].oid){
                        this.setState({data:this.state.data.concat(res[i])})
                    }
                }
                this.setState({data:this.state.data.sort(compare('oid'))})    
            }
          })  

    }

    handleChange = (e)=>{
        if(!this.state.low && !this.state.high)
            this.setState({inpValue:e.target.value})        
    }

    otherChange = (e)=>{
        if(!this.state.inpValue)
        this.setState({low:e.target.value})
    }

    anotherChange = (e)=>{
        if(!this.state.inpValue)
            this.setState({high:e.target.value})
    }
    search = ()=>{
        this.setState({data:[]})
        let oId = this.state.inpValue
        let low = this.state.low
        let high = this.state.high
        var compare = function (prop) {
            return function (obj1, obj2) {
                var val1 = obj1[prop];
                var val2 = obj2[prop];if (val1 < val2) {
                    return -1;
                } else if (val1 > val2) {
                    return 1;
                } else {
                    return 0;
                }            
            } 
        }
        if(oId){
            fetch('/api/youcha/order/getOrderByOIdAndStatus?oId='+oId+"&&status=1")
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res[0][0])
                this.setState({data:[res[0][0]]})
            })
            .catch(error => {
                alert(error)
                this.props.history.go(0)
            })
        }
        else if(this.state.low&&this.state.high){
            fetch('/api/youcha/order/getOrderByTPriceAndStatus?low='+low+'&&high='+high+'&&status=1')
            .then((res)=>res.json())
            .then((res)=>{
                res.map((item,index)=>{
                    this.setState({data:this.state.data.concat(item[0])})
                })
                this.setState({data:this.state.data.sort(compare('oid'))})
            })
            .catch(error => {
                alert(error)
                this.props.history.go(0)
            })
        }else{
                this.componentDidMount()
        }

    }
    changePage(current){
        this.setState({
            current:current
        })
    }

    onShowSizeChange(Current,pageSize){
        console.log(Current,pageSize)
    }
    fenye(){
        const fy={
            current:this.state.current,
            pageSize:this.state.pageSize,
            onChange:(current)=>this.changePage(current),
            onShowSizeChange:(Current,pageSize) =>{
                this.onShowSizeChange(Current,pageSize)
            },
            defaultCurrent:this.state.defaultCurrent,
            showQuickJumper:this.state.showQuickJumper,
        };
        return fy
    }
    render(){
        const columns=[
            {
                title:'订单号',
                dataIndex:'oid',
                key:'oid',
                align:'center'
            },{
                title:'用户号',
                dataIndex:'userId',
                key:'uerId',
                align:'center',
            },{
                title:'取货码',
                dataIndex:'code',
                key:'code',
                align:'center'
            },{
                title:'时间',
                dataIndex:'time',
                key:'time',
                align:'center'
            },{
                title:'价格',
                dataIndex:'tprice',
                key:'tprice',
                align:'center'
            },{
                title:'操作',
                key:'action',
                align:'center',
                render:(text, record,index)=>(
                    <Link to={'/viewOrder/'+text.oid+'/'+text.status}><Button type='primary'>查看</Button></Link>
                ),
            }
        ]
        return(
            <div style={{height:"100%"}}>
                <div className="ssearch" style={{height:"21.5%"}}>
                    <h2 style={{marginTop:"1.5%"}}>已完成订单</h2>
                    <form style={{marginTop:"-2%"}}>
                        订单号：<input 
                        type="text" 
                        style={{marginRight:"15%"}}
                        value = {this.state.inpValue}
                        onChange = {this.handleChange}
                        />
                        价格区间：<input 
                        type="text" 
                        style={{width:"5%",marginRight:"0"}}
                        value = {this.state.low}
                        onChange = {this.otherChange}
                        /> --
                        <input 
                        type="text" 
                        style={{width:"5%",marginRight:"0"}}
                        value = {this.state.high}
                        onChange = {this.anotherChange}
                        />元
                        <button type="button" style={{marginLeft:"20%"}} onClick = {this.search}>查询</button>
                    </form>
                </div>
                <Table
                className="antable"
                dataSource={this.state.data}
                columns={columns}
                pagination={this.fenye()}>
                </Table>
            </div>
        )
    }
}