import React, {Component} from 'react';
import star from '../img/star.png';

export default class viewDrink extends Component{
    constructor(props){
        super(props);
        this.state={
            dname:'',
            data:[],
            pro:''
            // img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAALn0lEQVR4nO3dbYhc1R0G8AsLipoYCpZ028QqSEqDiCgKfgkRFHyJCoZKiRFKRPEFgzRr1SJ0ESpooiBRbCQgqDGa0g8GoyZIQ/MhCSUKqR9MKqvjzvm/nHvnruvuTKgQOP2Qabq5e+/MZHfunDMzzw+eL/N6s//nZnZn7twTRQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0NeSJFnaaDRGjTGrmPn6arW6FgknzHy9MWZVo9EYTZJkqe++DCTn3Ejzh/2wiGxT1b1EdJKZHdJ/IaKTqrqXmbcx88PVanXtnj17Rnz3rG9MTEwsi+P4Dmb+s4j8Q0RO+x4qUm6aM96vqn+01t6SpumlvnsYnFqtdouIvCEise+BId53mFhE3qjVarf47qVXjUZjVETGiOiI76EgYYaIjojIWKPRGPXd155pNBqjRDSuqrSAH5ohos+I6LU4jp+x1j7GzBtV9e5qtbo2SZK7rLX3M/MjIvIUEb1ERHuZ+d++h40sPKpKRDQ+0DvK+e4YRHRCVXcT0RMicuNi3wlxzo1MTk5ezcwbieh1Zv7c9+AR7ChRFEWRqm5m5sk2P4AGEX3AzBunp6ev7MV2nTp1akVzh/mAmRu+C4B0nElV3dyLjpRKRO4UkYOt/rEi8rG19tE0TVf63NY0TVdaax8VkY8DKADSQUTkoIjc6bM3C1KpVEaZeWerf5yq7k2SZJ3vbc2TJMm65vv13kuAdJSdlUqlP37tEpE7VfXLftwxsrCj9E9U9cvgX02Y+bkW/4gTqrrJ9zYuhKpuEJF/+i4B0lGe892XeZxzF4nIX4s22lr74szMzGW+t3MxnHMj1totzFwNoARIi4jI34I5/mtmZuYyZv60YGNPMPNtvrexm+I4vkpEPvJdAqR1VPU4M//Sa1lE5AoR+SFvA4now0ql0pO3a30QkZd9lwBpm1Pff//9tV4KwsxrijbMWvuil43qMVV9KIASIG1ijLmpp8WYmpq6umhjROTxnm6MZyLyG98FQNqnZ5+zJUnyc2ZO8zaCiO7pyUYEpvmdFe8lQIpDRNXp6emflFoE59xFqno0bwOq1eraUp88cLOzsz/1XQKkdUTkI+fcBaWVQETezntiVd1Q2pP2kTRNL/VdAqTtTvJ2KcNX1SfznpCIxkt5wj7FzL/2XQKkdVT1yW4PfQ0R/YidozNEdKvvEiDFaXZ5TVeG7ZxboqrzvvWnqtu78gQDCm8Bhx1VPeKcW9KNQb+S8wQHnHM4G0Ub+DAx7KjqK4sacLVavSP7oEQ0mabp6i51aODhsJSwU61W71jQYJ1zF6jq4ZwHvbfLHRpocRxfxTjAMdio6uEFvfUrIs/nPOCuEjo08JpHAXsvA5IfEXn+vAY6NTV1Tc6DnK7VajeU1KGB5pwbwfdJws7U1NQ1HQ+UiLbmPMi2Ejs08FR1g+8SIMUhoq0dDbJery8XEZ17Z1WlNE1XlNyhgYev74YbEdF6vb687RCttWM5e9d4+fUZfEmSrPNdBKQ41tqxtkMkouNz76SqNHAn6vIIryLhhoiOtxweM6/PudN4b6ozHPAqEnzWFw6Pmd/L3LiGV4/uw8npgs57uUNrfqB1zgGJ1tq3etydoWCtfTSAIiD5+TGO46vmDY2Ins65cfHLDSxYmqYrGecCDjZE9PS8oWUPKxGRb0v99tWQa54w23sZkNwd5Mg5w6rX6z/L3khEcDh7iZh5o+8iIMWp1Wq/ODssIronewNjTF+cP7dficgVvkuAFEdVf3t2WET00twrReQH59yFHvszFFT1X76LgOSHiF4/OyjOrLYkIns89mZoWGvf8l0EJD+qeuZDQ+fcxTl7z4OeuzMUjDG/810EpDjOuYsjY8y12SuSJLnOd3mGQXPNRO9FQPJjjLk2EpH7sld0dFQjLJpzbsR3CZDiiMh98xa9EZHTvoszTBhLVIec5yJVfSdz4Xe+SzNMmuu4+y4CkhNVfSdi5kOZCw/7Ls0wyb7FjgSVQxEzfzH3QhHZ57s0w0REngqgCEh+voiI6Ou5FxLR+75LM0yY+ZEAioDkhIi+jkREMle86bs0w8Rae7/vIiD5ERGJRGQ2c+HLvkszTJIkuct3EZDCHWQ2yl6Ir9j2FlanCjuRiMzMvWDRJ/SF86Kqd/suAZIfEZmJVJUyV+z0XZphwvheSLBRVYqI6GRmr8GRvD1krX3MdxGQ/BDRyYiZj2Wu+NR3aYZJHMfP+C4CUphjkYgczFz4ue/SDBMiei2AIiA5EZGDETPvyFyovkszTIjoM99FQAqzIzLGzFu7Asur9Q4zmwCKgOTEGLOl6FSYl/suzjBIkmSp7xIgxUmSZF1kjFmVs+fc5Ls8w0BEbvRdAqQ4xphVURRF8z5NZ+bfe+7OUCCiJ3yXACnO3EGd84ciDnnvDVXd7bsESGEOzR3Us5kr/5MkyVKP3RkKRHQigCIgOTHGvHB2UCJyc/YGqnq3x+4MvOnp6St9lwApThzHt58dlnPukuxBizg3b7kYx2AFGxGZdc4tOWdgIrIvcyOc3b1EOLt7uMn9G1xVN+XcGOuDlADrg4QdVd00b2gTExPLOPOpLlaYKgdWmAo6ZmJiYlnu4Jj51cyNsUZhCbBGYdB5tXBwzLwmewd8Bbe7sMpt8FnTcoDMvH/uHbBOendhnfSgs7/tAJn5gewd8SrSHXj1CD4PdDRIIjo+946qSmmariy5PwMPrx7hhoiOdzxIa+1Y9gFUFR8cLkLB2+hIILHWjnU8zHq9vlxEKjl72a3lVWhwzczMXMbMOO4q0IhI5bzXxCGiB3Me7EA5FRps1toXfZcAKc6ClxzMOxybiP7Q5f4MNGa+zXcBkOKo6u4FDzdN09XMnOQ8KI707UClUrmS8atVyEnSNF29qCHHcbw5Zwf5JkmSX3WpRwOLiD4MoARIQeI43tyVQTPzruyDi8gnXXnwAYW/O4LPrq4NO03TFcz8Vc5OgtOU5hCRxwMoAFKcr9I0XdHVoRedhRw7ybmI6J4ACoC0SGl/QxPReN4TEtHrpTxhn8FaH+Gn9MOmmPldL08cOFXd4Hv4SNudY2uvynAUO8n/Fb2yIuGk538KMHOatyGq+peebohn2DnCDxFVfZWjWrC3fjLon5M450ZUdbvv4SNtk3otiojsydswVf1mUD9xbx5hcCCA4SMtoqpHfXcliqIoIqKtRRs5aMduMfO9RDTpe/hI27zruyvnsNb+qcXGHuj3Q+VrtdoNnHNEARJegn2zqPlh4rxP3P8XVd3eb99MbB5FsE1ETvsePNI2XwX/a32zUIX/06oqEdF46CeCaDQao0Q0nrNMNhJmdnX98JEyNY8CnneofOg7CnaMvkvStaNyey1N09UdrIFRs9a+xczrfZ0L2Dl3ATOvb25HLYChIx1EVXcv+vscISCiB/O+456NiHwrItuZef3U1FT+6R+7xDl3oTFmnYhsF5FvfQ8b6TwiUlnw12RDVa/Xl1trx7KnFGqRH0Xk78z8jDHmJma+fDGr79br9eVJklzX3Fn3iMgPvgeNnF+I6Li1duy8T7DQb/jMyen2L+SHJCLKzJ8z86fNDyl3quorRDQuIi8z85tE9L6I7FPVw8z8Hd6B6vvs505P6jZI+My5gF9lrBWOzI/hM91ofa7cYTAxMbFMVTeJyD4RmQ1gOIiHiMhM85V/U+ESBMPOObckjuPbjTEvMPMh30NDyg0Rfaaqz4rIzc65S3z3ry8ZY1YlSbLOGLOFmXeIyEFmPkZEJ1WVsusrIv4jIjPNz7pOMvOx5sx2GGO2NGe5ynevAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgbP8FGnjIE14UusEAAAAASUVORK5CYII="

        }
    }
    

    componentDidMount(){
        const id = this.props.match.params.drinkId
        fetch('/api/youcha/drink/getDrinkByDrinkId?drinkId='+id)
        .then((res)=>res.json())
        .then((res)=>{
            fetch('/api/youcha/type/getTypeByTypeId?typeId='+res.typeId)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({tname:res.tname})
            })
            // console.log('../'+res.img)
            this.setState({
                data:res,
                pro:require('../'+res.img).default
            })
        })
    }


   
    render(){
        const {data,tname,pro} = this.state
                                                                           
        return(
            <div className="aCommodity">
                <h2>查看商品详情</h2>
                <form>
                        商品名称：<input type="text" readOnly value={data.dname}/>
                        商品类别：<input type="text" readOnly value={tname}/>
                        商品价格：<input type="text" readOnly value={data.price}/>
                </form>
                <ul>
                    <li>是否可选加糖：<div className={data.brix?'start':'close'}></div></li>
                    <li>是否可选温度：<div className={data.temp?'start':'close'}></div></li>
                    <li>是否可选小料：<div className={data.extra?'start':'close'}></div></li>
                    <li>是否可选规格：<div className={data.size?'start':'close'}></div></li>
                    <li>评分：{data.evStar}</li>
                   
			    </ul>
                <div className="showImg">
                    商品图片
                    <div style={{height:'104px',width:'104px',border:'1px solid lightGrey'}}>
                        <img src={pro} style={{width:'86px',height:'86px',margin:'9px 9px'}}/>
                    </div>
                </div>
                <label style={{position:"relative",top:"-35.9%",left:"50%"}}>商品详情</label>
                <form  method="post" action="save.php" style={{width:"40%",height:"40%",margin:"-18% 50%"}}>
                    <textarea cols="30" rows="5" readOnly value={data.details}></textarea>
                </form>
                <div className="btndiv">
                    <button style={{marginLeft:"45%",width:'5%'}} onClick={this.props.history.goBack}>确定</button>
                    
                </div>
                
                
            </div>
            
        )

    }
}
