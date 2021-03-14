import React,{Component,useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './index.css';
// import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
// import Item from 'antd/lib/list/Item';
// import { ProgressPlugin } from 'webpack';
// function Counter(){
//     //useState可以写多个，写在函数组件的最顶层
//     let [num, setNum] = useState(0);
//     function add(){
//         setNum(num+1);
//     }
//     return (
//         <div>
//             <p>{num}</p>
//             <button onClick={add}>+1</button>
//         </div>
//     )
// }

// function ShowTime(props){
//     let [time, setTime] = useState(0)
//     let [topic, setTopic] = useState([])
//     //useEffect能够代替componentdidmount和componentDidUpdate
//     //还能代替componentWillUnmount
//     //useEffect可以写多个,按需求分开
//     let page = props.match.params.page
//     useEffect(()=>{
        
//         fetch("https://cnodejs.org/api/v1/topics?page="+page)
//             .then(res=>res.json())
//             .then(res=>{
//                 setTopic(res.data);
//                 console.log(res);
//             })
//     },[page]);
//     useEffect(()=>{
//         let id = setInterval(()=>{
//             setTime(time=>time + 1)
//         },1000)
//         return () =>{
//             clearInterval(id)
//         }
//     },[])
//     return <div>
//         {time}
//         {
            
//             topic.map((item)=><p>{item.title}</p>)
//         }
//         </div>
// }
ReactDOM.render(
    // // <Router>
    //     <div>
    //         <ul>
    //             <li><Link to='/showtime/1'>ShowTime1</Link></li>
    //             <li><Link to='/showtime/2'>ShowTime2</Link></li>
    //             <li><Link to ='/counter'>Counter</Link></li>
    //         </ul>
    //         <div>
    //             <Route path='/counter' component={Counter}/>
    //             <Route path='/showtime/:page' component={ShowTime}/>
    //         </div>
    //     </div>
    // </Router>,
    <App/>,
    document.getElementById('root')
);