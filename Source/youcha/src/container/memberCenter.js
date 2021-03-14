import React, {Component} from 'react';
import {Table} from 'antd'
export default class memberCenter extends Component{
    constructor(props){
        super(props);
        this.state = {
            inpValue : '',
            current:1,
            pageSize:4,
            defaultCurrent:2,
            showQuickJumper:true,
            data: []
        };
        this.fenye = this.fenye.bind(this)
        this.changePage = this.changePage.bind(this)
        this.onShowSizeChange = this.onShowSizeChange.bind(this)
    }

    handleChange = (e)=>{
        this.setState({inpValue:e.target.value})        
    }

    search=()=>{
        const id = this.state.inpValue
        fetch('/api/youcha/user/getUserByUserId?userId='+id)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({
                data:[res]
            })
        })
    }


    changePage(current){
        this.setState({
            current:current
        })
    }

    onShowSizeChange(Current,pageSize){
        console.log(Current,pageSize)
    }

    componentDidMount(){
        fetch('/api/youcha/user/getAllUser')
        .then((res)=>res.json())
        .then((res)=>{

            this.setState({data:res})
        })
        .catch(error => alert('error is', error));
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
        const columns = [
            {
                title:'会员id',
                dataIndex:'userId',
                key:'userId',
                align:'center'
            },{
                title:'会员昵称',
                dataIndex:'uname',
                key:'uname',
                align:'center'
            },{
                title:'会员手机号',
                dataIndex:'phone',
                key:'phone',
                align:'center'
            },{
                title:'密码',
                dataIndex:'password',
                key:'password',
                align:'center'
            }];
        return(
            <div style={{height:"100%"}}>
                <h2>会员中心</h2>
                <div className="ssearch">    
                    <form>
                        会员id：<input 
                        type="text"
                        value = {this.state.inpValue}
                        onChange = {this.handleChange}/>
                        <button type="button" onClick = {this.search} style={{marginLeft:"50%",height:'27.85px'}}>查询</button>
 
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