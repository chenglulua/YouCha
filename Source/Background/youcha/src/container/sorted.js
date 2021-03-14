import React ,{Component} from 'react';
import {Table} from 'antd';
export default class sorted extends Component{
    constructor(props){
        super(props);
        this.state = {
            typeId:'',
            tname:'',
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
        fetch('/api/youcha/type/getAllType')
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({data:res})
        })
    }



    anotherChange = (e)=>{
        this.setState({tname:e.target.value})        
    }
    updateType = ()=>{
        // console.log(this.state.tname)
        // fetch('/api/youcha/type/addType',{
        //     body:JSON.stringify(this.state.tname),
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     method: 'POST',
        // })
        // .then(response => {
        //     if (response.ok){
        //         // this.props.history.go(0)
        //         return response.json();               
        //     }
        //     throw new Error('请求发生错误')
        // })
        // .then(data=>{
        //     console.log(data)
        // })
        // .catch(error => {
        //     alert(error)
        //     console.log(error)
        // })

        // let myFetch = {
        //     post(url, body){
        //         return fetch(url,{
        //             method:'POST',
        //             headers:{
        //                 "Accept":"application/json",
        //                 "Content-Type":'application/json'
        //             },
        //             body:JSON.stringify(body)
        //         }).then(res=>
        //             {
        //                 res.json()
        //             }
        //             )
        //     }
        // }

        // myFetch.post('/api/youcha/type/addType',{
        //     tName : this.state.tname
        // }).then(res=>{
        //     console.log('json',res)
        // })
        fetch('/api/youcha/type/addType?tName='+this.state.tname)
        .then((res)=>res.json())
        .then((res)=>{
            if(res){
                alert("新建类型成功")
                this.props.history.go(0)
            }else{
                alert("新建失败")
                this.props.history.go(0)
            }
            
            
        })
        

    }
    render(){
        const columns = [{
            title:'类型id',
            dataIndex:'typeId',
            key:'typeId',
            align:'center'
        },{
            title:'类型名称',
            dataIndex:'tname',
            key:'tname',
            align:'center'
        }]
        return(

            <div style={{height:"100%"}}>
                <div className="ssearch" style={{height:"21.5%"}}>
                    <h2 style={{marginTop:"1.5%"}}>商品分类</h2>
                    <button type="button" className="Cbutton" style={{height:"25%"}} onClick={()=>{                
                        document.getElementById("sortdiv").className="sortaddbc";
                        document.getElementById("sortdiv").style={display:"block"};
                    }}>新增</button>
                </div>
                <Table
                className="antable"
                dataSource={this.state.data}
                columns={columns}
                pagination={this.fenye()} >
                </Table>
                
                <div id="sortdiv" style={{display:"none"}} className="sortaddbc">
                    <table className="sortadd" cellSpacing="0" cellPadding="" style={{height:"10%",width:"50%",margin:"0 auto",textAlign:"center"}}>
                        <tr>
                            {/* <th>类型id</th> */}
                            <th style={{width:"60%"}}>类型名称</th>
                            <th colSpan="2">操作</th>
                        </tr>
                        <tr>
                            
                            <td>
                                <input 
                                type="text"
                                value={this.state.tname}
                                onChange={this.anotherChange}/>
                            </td>
                            <td>
                                <button onClick={this.updateType}>提交</button>
                            </td>
                            <td>
                                <button onClick={()=>{
                                    document.getElementById("sortdiv").className="hide";
                                }}>取消</button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}