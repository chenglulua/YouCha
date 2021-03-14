import React,{Component} from 'react';
import {Link} from 'react-router-dom'
export default class deal extends Component{
    render(){
        return(
            <div className="order">
                <h2>成交订单</h2>
                <div className="ocenter">
                    <Link to='/tobeMade'>
                        <button className="leftdiv" style={{fontSize:"30px"}}>待制作订单</button>
                    </Link>
                    <Link to='Orderdone'>
                    <button className="rightdiv"style={{fontSize:"30px"}}>已完成订单</button>
                    </Link>
                </div>
            </div>
        )
    }
}