import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Table,Button} from 'antd'
export default class managecomment extends Component{
    constructor(props){
        super(props);
        this.state = {
            inpValue:'',
            starValue:'',
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
        if (!this.state.starValue)
            this.setState({inpValue:e.target.value})        
    }

    handleChan = (e) =>{
        if(!this.state.inpValue)
            this.setState({starValue:e.target.value})
    }

    search = ()=>{
        let id = this.state.inpValue
        let star = this.state.starValue
        if(id){
            fetch('/api/youcha/assessment/getAssByDrinkId?drinkId='+id)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({data:res})
            })
            .catch(error => console.log('error is', error));
        }
        else if(star){
            fetch('/api/youcha/assessment/getAssByStar?star='+star)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({data:res})
            })
        }else{
            fetch('/api/youcha/assessment/getAllAss')
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({data:res})
            })
        }
    }

    changePage(current){
        console.log(current);
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
                console.log(pageSize);
                this.onShowSizeChange(Current,pageSize)
            },
            defaultCurrent:this.state.defaultCurrent,
            showQuickJumper:this.state.showQuickJumper,
        };
        return fy
    }

    componentDidMount(){
        fetch('/api/youcha/assessment/getAllAss')
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({data:res})
        })
    }
    
    render(){
        const columns = [
            {
                title:'assId',
                dataIndex:'assId',
                key:'assId',
                align:'center',
            },{
                title:'drinkId',
                dataIndex:'drinkId',
                key:'drinkId',
                align:'center'
            },{
                title:'star',
                dataIndex:'star',
                key:'star',
                align:'center'
            },{
                title:'操作',
                key:'action',
                align:'center',
                render:(text, record,index)=>(
                    <Link to={'/viewmore/'+text.assId}><Button type='primary'>查看</Button></Link>
                ),
            }];
        return(
            <div style={{height:"100%"}}>
                <h2>评论管理</h2>
                <div className="ssearch">    
                    <form>
                        商品id：<input 
                        type="text"
                        value = {this.state.inpValue}
                        onChange = {this.handleChange}
                        />
                        评分：<input 
                        type="text"
                        value = {this.state.starValue}
                        onChange = {this.handleChan}
                        />
                        <button type="button" onClick = {this.search} style={{width:"7%",height:"27.85px"}}>查询</button>
                        
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