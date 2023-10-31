import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
<div class="jumbotron">
  <h1 class="display-4">Expense Reimbursement System</h1>
  <p class="lead">Our target is your well-being, so it's our responsibility to take your care while you take care of the company<span style={{fontSize:"40px"}}>&#129309;</span></p>
  <hr class="my-4" />
  <p>For any emergency helpline you may click below or try to contact : +91-924346778 || 0987625465 </p>
  <a class="btn btn-dark btn-lg" href="#" role="button">Click here</a>
</div>
)
}
export default Header;