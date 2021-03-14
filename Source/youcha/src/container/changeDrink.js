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
            drinkId:'',
            dname:"",
            typeId:"",
            typeArr:[],
            price:"",
            evStar:"",
            img:"",
            details:"",
            data:[],
            brix:'',
            temp:'',
            size:'',
            extra:'',
            tname:'',
            pro:''
        }


    }
    
    componentDidMount(){
        const id = this.props.match.params.drinkId
        fetch('/api/youcha/type/getAllType')
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({typeArr:res})
        })
        fetch('/api/youcha/drink/getDrinkByDrinkId?drinkId='+id)
        .then((res)=>res.json())
        .then((res)=>{
            fetch('/api/youcha/type/getTypeByTypeId?typeId='+res.typeId)
            .then((resp)=>resp.json())
            .then((resp)=>{
                this.setState({tname:resp.tname})
            })
            this.setState({
                drinkId:res.drinkId,
                dname:res.dname,
                price:res.price,
                brix:res.brix,
                temp:res.temp,
                size:res.size,
                extra:res.extra,
                evStar:res.evStar,
                details:res.details,
                typeId:res.typeId,
                // img:"data:image/png;base64,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"
                img:res.img,
                pro:require("../"+res.img).default
            })
            // this.setState({
            //   img: 'data:image/png;base64,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'
            // })
        })
        
    }

    getType = (e)=>{
        this.setState({typeId:e.target.value})
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


    changeClass = (e) =>{
        if(e.target.className ==='start'){
            e.target.className = 'close'
        }else{
            e.target.className = 'start'
        }
    }


    changeBrix = (e) =>{
        this.changeClass(e)
        this.setState({
            brix:!this.state.brix
        })
    }
    changeTemp = (e)=>{
        this.changeClass(e)
        this.setState({
            temp:!this.state.temp
        })
    }
    changeExtra = (e)=>{
        this.changeClass(e)
        this.setState({
            extra:!this.state.extra
        })
    }
    changeSize = (e)=>{
        this.changeClass(e)
        this.setState({
            size:!this.state.size
        })
    }

    newDrink = ()=>{

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
        myFetch.post('/api/youcha/drink/updateDrink/',{
            typeId:Number(this.state.typeId),
            details:this.state.details,
            drinkId : Number(this.state.drinkId),
            price:Number(this.state.price),
            img:this.state.img,
            brix:this.state.brix,
            temp:this.state.temp,
            extra:this.state.extra,            
            size:this.state.size,            
            evStar:this.state.evStar,
            dname:this.state.dname
        }).then(res=>{
            console.log('json',res)
        })
    }


    getChildInfo = (name)=>{
        if(name.length!==0)
　　 　　{
            this.setState({img:name[0].thumbUrl});

        }
　　 }






    render(){
        // const pro = require(this.state.img).default
        const {dname,price,details,brix,temp,size,extra,evStar,typeId,pro} = this.state
        return(
            <div className="aCommodity">
                <h2>编辑商品</h2>
                <form>
                        商品名称：<input type="text"
                        value = {dname}
                        onChange = {this.handleChange}
                        />
                        商品类别：<select type="text" style={{marginRight:'15%'}} onChange={this.getType}>
                            {
                                this.state.typeArr.map((item,index)=>{
                                    if (item.typeId === typeId){
                                        return <option value={item.typeId} selected>{item.tname}</option>
                                    }
                                    return <option value={item.typeId}>{item.tname}</option>
                                })
                            }
                        </select>
                        商品价格：<input type="text"
                        value = {price}
                        onChange = {this.getPrice}
                        />
                </form>
                <ul>
                    <li>是否可选加糖：<div className={brix?'start':'close'} onClick={this.changeBrix}></div></li>
                    <li>是否可选温度：<div className={temp?'start':'close'} onClick={this.changeTemp}></div></li>
                    <li>是否可选小料：<div className={extra?'start':'close'} onClick={this.changeExtra}></div></li>
                    <li>是否可选规格：<div className={size?'start':'close'} onClick={this.changeSize}></div></li>
                    <li>评分：{evStar}</li>
			    </ul>
                <div className="showImg">
                    商品图片
                    <div style={{height:'104px',width:'104px',border:'1px solid lightGrey'}}>
                        <img src={pro} style={{width:'86px',height:'86px',margin:'9px 9px'}}/>
                    </div>
                </div>
                <label style={{position:"relative",top:"-35.9%",left:"50%"}}>商品详情</label>
                <form  method="post" action="save.php" style={{width:"40%",height:"40%",margin:"-18% 50%"}}>
                    <textarea cols="30" rows="5" value={details} onChange={this.getDetails}></textarea>
                </form>
                <div className="btndiv">
                    <button className="addCbtn" style={{marginLeft:"36%"}} onClick={this.newDrink}>提交</button>
                    <button className="addCbtn" style={{marginLeft:"5%"}} onClick={this.props.history.goBack}>取消</button>
                </div>
                
                
            </div>
            
        )

    }
}
