import React, { useState,useEffect } from 'react';
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <div>
<Navbar />
<Header />        
<div class="row">
  <div class="col-sm-6 bg-danger">
    <div class="card bg-danger" style={{height:"150px"}}>
      <div class="card-body bg-warning" style={{backgroundColor:"", 
                                     height:"100px",
                                     width: "500px",
                                     margin: "auto"}}>
        <h5 class="card-title">Are you an Employee ?</h5>
        <p class="card-text">Hurry up, Apply for your reimbursement here</p>
        <Link to="/employee" class="btn btn-dark">Log in as Employee</Link>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card bg-danger" style={{height:"150px"}} >
      <div class="card-body bg-warning" style={{backgroundColor:"", 
                                     height:"100px",
                                     width: "500px",
                                     margin: "auto"}}>
        <h5 class="card-title">Finance Manager ?</h5>
        <p class="card-text">Check reimbursement requests here</p>
        <Link to="/manager" class="btn btn-dark">Log in as Finance Manager</Link>
      </div>
    </div>
  </div>
</div>
</div>
    )
}
export default Homepage;