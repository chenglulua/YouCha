import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {Table,Button} from 'antd'
export default class shopCenter extends Component{
    constructor(props){
        super(props);
        this.state = {
            inpValue : '',
            drinkId:'',
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
            res.map((item)=>{
                fetch('/api/youcha/type/getTypeByTypeId?typeId='+item.typeId)
                .then((res)=>res.json())
                .then((res)=>{
                    this.setState({data:this.state.data.concat({
                        "drinkId":item.drinkId,
                        "dname":item.dname,
                        'tname':res.tname,
                        "price":item.price
                    })})
                    this.setState({data:this.state.data.sort(compare('drinkId'))})
                })
            })
            
        })
    }

    delDrink(drinkId){
        fetch('/api/youcha/drink/deleteDrinkByDrinkId?drinkId='+drinkId)
        .then((res)=>res.json())
        .then((res)=>{
            if(res){
                alert("删除成功")
                this.props.history.go(0)
            }else{
                alert("删除失败")
                this.props.history.go(0)
            }
            
        })
        
    }

    getDname = (e)=>{
        if(this.state.drinkId === '')
            this.setState({inpValue:e.target.value})
    }

    getDid = (e)=>{
        if(this.state.inpValue === '')
            this.setState({drinkId:e.target.value})
    }
    search = ()=>{
        
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
        if(this.state.drinkId){
            fetch('/api/youcha/drink/getDrinkByDrinkId?drinkId='+this.state.drinkId)
            .then((res)=>res.json())
            .then((res)=>{
                fetch('/api/youcha/type/getTypeByTypeId?typeId='+res.typeId)
                .then((resp)=>resp.json())
                .then((resp)=>{
                    this.setState({data:[{'drinkId':res.drinkId,'dname':res.dname,'tname':resp.tname,'price':res.price}]})
                })
            })
        }
        else if(this.state.inpValue){
            this.setState({data:[]})
            fetch('/api/youcha/drink/getDrinkByDName?str='+this.state.inpValue)
            .then((res)=>res.json())
            .then((res)=>{
                res.map((item)=>{
                    fetch('/api/youcha/type/getTypeByTypeId?typeId='+item.typeId)
                    .then((res)=>res.json())
                    .then((res)=>{
                        this.setState({data:this.state.data.concat({
                            "drinkId":item.drinkId,
                            "dname":item.dname,
                            'tname':res.tname,
                            "price":item.price
                        })})
                        this.setState({data:this.state.data.sort(compare('drinkId'))})
                    })
                })
            })
        }
        
        else{
            this.setState({data:[]})
            fetch('/api/youcha/drink/getAllDrink')
            .then((res)=>res.json())
            .then((res)=>{               
                res.map((item)=>{
                    fetch('/api/youcha/type/getTypeByTypeId?typeId='+item.typeId)
                    .then((res)=>res.json())
                    .then((res)=>{
                        this.setState({data:this.state.data.concat({
                            "drinkId":item.drinkId,
                            "dname":item.dname,
                            'tname':res.tname,
                            "price":item.price
                        })})
                        this.setState({data:this.state.data.sort(compare('drinkId'))})
                    })
                })
                
            })
            
        }
    }

    render(){
        const columns = [
            {
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
                title:'类别',
                dataIndex:'tname',
                key:'tname',
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
                    <Button type='primary' onClick={()=>this.delDrink(text.drinkId)}>删除</Button>
                ),
            }
    ]

        return(
            <div style={{height:"100%"}}>
                <h2>商品中心</h2>
                <div className="ssearch">    
                    <form>
                        商品名称：<input 
                        type="text"
                        value = {this.state.inpValue}
                        onChange={this.getDname}
                        />
                        商品id：<input 
                        type="text"
                        value={this.state.drinkId}
                        onChange = {this.getDid}
                        />
                        <button type="button" onClick={this.search} style={{height:'27.85px'}}>搜索</button>
                        <Link to='/AddCommodity'><button type="button" style={{height:'27.85px'}}>新建</button></Link>
                    </form>
                </div>
                <Table
                className="antable"
                dataSource={this.state.data}
                columns={columns}
                pagination={this.fenye()}
                sorter={(a,b)=>a.drinkId-b.drinkId}>
                </Table>
            </div>
            
        )
    }
}