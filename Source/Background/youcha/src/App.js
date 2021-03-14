import React, { Component } from 'react';
import Header from './components/header' ;
import Navigation from './components/navigation.js' ;
import {HashRouter as Router,Route} from 'react-router-dom';
import Home from './container/Home';
import shopCenter from './container/shopCenter';
import AddCommodity from './container/AddCommodity';
import ManageCommodity from './container/ManageCommodity';
import sorted from './container/sorted';
import deal from './container/deal';
import tobeMade from './container/tobeMade';
import Orderdone from './container/Orderdone';
import viewOrder from './container/viewOrder.js';

import memberCenter from './container/memberCenter.js';
import managecomment from './container/managecomment.js';
import viewmore from './container/viewmore.js';

import viewDrink from './container/viewDrink.js'
import changeDrink from './container/changeDrink'

export default class App extends Component {
  render() {
      return (
        <Router basename='/build'>
        <div>
            <Header/>
            <Navigation/>
            <div className="main">
              <Route path='/' exact component={Home}/>
              <Route path='/shopCenter' component={shopCenter}/>
              <Route path='/AddCommodity' component={AddCommodity}/>
              <Route path='/ManageCommodity' component={ManageCommodity}/>
              <Route path='/sorted' component={sorted}/>
              <Route path='/deal' component={deal}/>
              <Route path='/tobeMade' component={tobeMade}/>
              <Route path='/Orderdone' component={Orderdone}/>
              <Route path='/viewOrder/:oid/:status' component={viewOrder}/>
              <Route path='/memberCenter' component={memberCenter}/>
              <Route path='/managecomment'component={managecomment}/>
              <Route path='/viewmore/:assId' component={viewmore}/>
              <Route path='/viewDrink/:drinkId' component={viewDrink}/>
              <Route path='/changeDrink/:drinkId' component={changeDrink}/>
            </div>
        </div>
        </Router>
      );
  }
}