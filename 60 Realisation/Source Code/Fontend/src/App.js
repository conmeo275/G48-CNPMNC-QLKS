import React from 'react';

import './style.css';
import './CssCustomise.css';

import {Home} from './components/Home'
import {TypeRoom} from './components/TypeRoom'
import {Room} from './components/Room'
import {Order} from './components/Order'
import {Navigation} from './components/Navigation'


import{BrowserRouter,Route, Switch,Link} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="dashboard-main-wrapper">
        
  
    {/* <Navigation/> */}
     
     <div className="dashboard-header">
  <nav className="navbar navbar-expand-lg bg-white fixed-top">
    <a className="navbar-brand">Admin</a>
  </nav>
</div>
<div className="nav-left-sidebar sidebar-dark">
  <div className="menu-list">
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="d-xl-none d-lg-none" href="#">Menu</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav flex-column">
          <li className="nav-divider">
            <Link to="/">Thông tin chung</Link>
          </li>
          <li className="nav-item">
            
          
            <Link className="nav-link" to="/order" >
              <i className="far fa-clock" /> Đặt phòng
            </Link>
            <Link className="nav-link" to="/typeroom" >
              <i className="far fa-clock" /> Loại phòng
            </Link>
            <Link className="nav-link" to="/room" >
              <i className="far fa-clock" /> Quản lý phòng
            </Link>
          </li>
         
          
        </ul>
      </div>
    </nav>
  </div>
</div>
<div class="dashboard-wrapper">
<Switch>
      <Route path='/' component={Home} exact/>
      <Route path='/typeroom' component={TypeRoom} />
      <Route path='/room' component={Room} />
      <Route path='/order' component={Order} />
      </Switch>
</div>

    </div>
    </BrowserRouter>
  );
}

export default App;
