import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {Table,Button} from 'antd'
import { changeConfirmLocale } from 'antd/lib/modal/locale';
export default class tobeMade extends Component{
    constructor(props){
        super(props);
        this.state = {
            current:1,
            pageSize:4,
            defaultCurrent:2,
            showQuickJumper:true,
            data: [],
            inpValue:'',
            low:'',
            high:''
        };
        this.fenye = this.fenye.bind(this)
        this.changePage = this.changePage.bind(this)
        this.onShowSizeChange = this.onShowSizeChange.bind(this)
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

    changeStatus(id){
        fetch('/api/youcha/order/updateOrderStatusByOId?oId='+id)
        .then((res)=>res.json())
        .then((res)=>{
            if(res){
                alert("订单状态已更改")
                this.componentDidMount()
            }
        })
        
       
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
        fetch('/api/youcha/order/getOrderByStatus?status=0')
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
            }else{
                this.setState({data:[]})
            }
                             
        })

    }

    search =()=>{
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
        if(this.state.inpValue){
            fetch('/api/youcha/order/getOrderByOIdAndStatus?oId='+oId+"&&status=0")
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({data:[res[0][0]]})
            })
            .catch(error => {
                alert('error')
                this.props.history.go(0)
            })
        }
        else if(this.state.low&&this.state.high){
            this.setState({data:[]})
            fetch('/api/youcha/order/getOrderByTPriceAndStatus?low='+low+'&&high='+high+'&&status=0')
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

    handleChange = (e)=>{
        if(!this.state.low&&!this.state.high)
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

    render(){
        console.log(this.state.data)
        const columns = [{
            title:'订单号',
            dataIndex:'oid',
            key:'oid',
            align:'center'
        },{
            title:'用户号',
            dataIndex:'userId',
            key:'userId',
            align:'center'
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
                <div>
                    <Button type="button" style={{width:'25%',marginRight:'10%'}} onClick={()=>this.changeStatus(text.oid)}>制作</Button>
                    <Link to={'/viewOrder/'+text.oid+'/'+text.status}><Button type='primary' style={{width:'25%'}}>查看</Button></Link>
                </div>
            ),
        }]


        return(
            <div style={{height:"100%"}}>
                <div className="ssearch" style={{height:"21.5%"}}>
                    <h2 style={{marginTop:"1.5%"}}>待制作订单</h2>
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
                pagination={this.fenye()}
                >
                </Table>
            </div>
        )
    }
}