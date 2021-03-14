import React, {Component} from 'react';
import star from '../img/star.png';
import Addpic from '../components/addPic'
// // import Button from 'antd/lib/button';
// // import Upload from 'antd/lib/upload';
// // import Modal from 'antd/lib/modal';


export default class AddCommocity extends Component{
    constructor(props){
        super(props);
        this.state={
            navList1:[
                {
                    id:0,
                    navName:'是否可选加糖:',
                    navOpen:true,
                },{
                    id:1,
                    navName:'是否可选温度:',
                    navOpen:true,
                },{
                    id:2,
                    navName:'是否可选小料：',
                    navOpen:true,
                },{
                    id:3,
                    navName:'是否可选规格:',
                    navOpen:true,
                }
            ],
            dname:"",
            dtype:"1",
            typeArr:[],
            price:"",
            star:"5",
            details:"",
            data:[],
            img:''
        }


    }
    
    componentDidMount(){
        fetch('/api/youcha/type/getAllType')
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({typeArr:res})
        })
    }

    getType = (e)=>{
        this.setState({dtype:e.target.value})
    }
    handleChange = (e)=>{
        this.setState({dname:e.target.value})
    }

    getPrice = (e)=>{
        this.setState({price:e.target.value})
    }
    getDetails = (e) =>{
        this.setState({details:e.target.value})
    }

    submitDrink = ()=>{

        let myFetch = {
            post(url, body){
                return fetch(url,{
                    method:'POST',
                    headers:{
                        "Accept":"application/json",
                        "Content-Type":'application/json'
                    },
                    body:JSON.stringify(body)
                }).then(res=>res.json())
            }
        }


        // console.log({
        //     typeId:Number(this.state.dtype),
        //     details:this.state.details,
        //     price:Number(this.state.price),
        //     img:this.state.imgName,
        //     brix:this.state.navList1[0].navOpen,
        //     temp:this.state.navList1[1].navOpen,
        //     extra:this.state.navList1[2].navOpen,
        //     size:this.state.navList1[3].navOpen,
        //     evStar:5,
        //     dname:this.state.dname
        // })
        myFetch.post('/api/youcha/drink/addDrink',{
            typeId:Number(this.state.dtype),
            details:this.state.details,
            price:Number(this.state.price),
            img:this.state.img,
            brix:this.state.navList1[0].navOpen,
            temp:this.state.navList1[1].navOpen,
            extra:this.state.navList1[2].navOpen,
            size:this.state.navList1[3].navOpen,
            evStar:5,
            dname:this.state.dname
        }).then(res=>{
            if(res){
                alert("上传成功")
                
            }else{
                alert("上传失败")
            }
            this.props.history.go(-1)
        })

    }

    getChildInfo = (name)=>{
        if(name.length!==0)
　　 　　   {this.setState({img:name[0].thumbUrl});
}
　　 }

    render(){
        let navList = [...this.state.navList1]
        return(
            <div className="aCommodity">
                <h2>新增商品</h2>
                <form>
                        商品名称：<input type="text"
                        value = {this.state.dname}
                        onChange = {this.handleChange}
                        />
                        商品类别：<select type="text" style={{marginRight:'15%'}} onChange={this.getType}>
                            {
                                this.state.typeArr.map((item,index)=>{
                                    return <option value={item.typeId}>{item.tname}</option>
                                })
                            }
                        </select>
                        商品价格：<input type="text"
                        value = {this.state.price}
                        onChange = {this.getPrice}
                        />
                </form>
                <ul>
                    
                    {this.state.navList1.map((item,index)=>{
                        return <li>{item.navName}
                        <div onClick={
                            ()=>{
                            item.navOpen = !item.navOpen; 
                            
                            document.getElementById(item.id).className=item.navOpen?'start':'close';   
                            
                            this.setState({navList1:navList})                                              
                            }
                        } id={item.id} className="start">
                        </div>
                        
                        </li>
                    })}
                    <li>星级:5</li>
			    </ul>
                <div className="showImg">
                    商品图片
                    <Addpic toParent={this.getChildInfo.bind(this)} />
                </div>
                <label style={{position:"relative",top:"-35.9%",left:"50%"}}>商品详情</label>
                <form  method="post" action="save.php" style={{width:"40%",height:"40%",margin:"-18% 50%"}}>
                    <textarea cols="30" rows="5" value={this.state.details} onChange={this.getDetails}></textarea>
                </form>
                <div className="btndiv">
                    <button className="addCbtn" style={{marginLeft:"36%"}} onClick={this.submitDrink}>提交</button>
                    <button className="addCbtn" style={{marginLeft:"5%"}} onClick={this.props.history.goBack}>取消</button>
                </div>
                
                
            </div>
            
        )

    }
}
