import React, {Component} from 'react';
import {Table,Button} from 'antd'
import {Link} from 'react-router-dom'
export default class ManageCommodity extends Component{
    constructor(props){
        super(props);
        this.state = {
            current:1,
            pageSize:4,
            defaultCurrent:2,
            showQuickJumper:true,
            data: [],
            dname:'',
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

    componentDidMount(){
        fetch('/api/youcha/drink/getAllDrink')
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({data:res})
        })
    }

    getDname = (e)=>{
        if(this.state.low===''&&this.state.high==='')
            this.setState({dname:e.target.value})
    }

    getLow = (e)=>{
        if(this.state.dname==='')
            this.setState({low:e.target.value})
    }
    getHigh = (e)=>{
        if(this.state.dname==='')
            this.setState({high:e.target.value})
    }

    search = ()=>{
        if(this.state.dname){
            fetch('/api/youcha/drink/getDrinkByDName?str='+this.state.dname)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({data:res})
            })
        }
        else if(this.state.low&&this.state.high){
            fetch('/api/youcha/drink/getDrinkByPrice?low='+this.state.low+'&&high='+this.state.high)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({data:res})
            })
        }else{
            fetch('/api/youcha/drink/getAllDrink')
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({data:res})
             })
        }
    }

    render(){
        const columns = [{
            title:'商品id',
            dataIndex:'drinkId',
            key:'drinkId',
            align:'center'
        },{
            title:'商品名称',
            dataIndex:'dname',
            key:'dname',
            align:'center'
        },{
            title:'商品评分',
            dataIndex:'evStar',
            key:'evstar',
            align:'center'
        },{
            title:'价格',
            dataIndex:'price',
            key:'price',
            align:'center'
        },{
            title:'操作',
                key:'action',
                align:'center',
                render:(text, record,index)=>(
                <div>
                    <Link to={'/viewDrink/'+text.drinkId}><Button type="button" style={{width:'30%',textAlign:'center',marginRight:'10%'}}>查看</Button></Link>
                    <Link to={'/changeDrink/'+text.drinkId}><Button type='primary' style={{width:'30%',textAlign:'center'}}>编辑</Button></Link>
                </div>
            ),
        }]
        
        
        return(
            <div style={{height:"100%"}}>
                <h2>在售商品管理</h2>
                <div className="ssearch">
                    <form>
                        商品名称：<input type="text" style={{marginRight:"15%"}} value={this.state.dname} onChange={this.getDname}/>
                        价格区间：<input type="text" style={{width:"5%",marginRight:"0"}} value={this.state.low} onChange={this.getLow}/> --
                                 <input type="text" style={{width:"5%",marginRight:"0"}} value={this.state.high} onChange={this.getHigh}/>元
                        <button type="button" style={{marginLeft:"20%",height:'27.85px'}} onClick = {this.search}>查询</button>
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