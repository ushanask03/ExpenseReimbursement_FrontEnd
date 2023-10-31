import { Link } from "react-router-dom";
import NavbarReimbursement from "../components/NavbarReimbursement";

const ReimbursementEmployeepage = () => {
    return(
        <div style={{backgroundColor: "black", minHeight:"700px"}}>
        <NavbarReimbursement />
        <div className="bg-warning" style={{border: '2px solid black', width: '850px',minHeight: "500px", margin: "auto", padding: "10px",marginTop:"30px",boxShadow: "10px 10px 10px red",borderRadius: "10px "}} >
        <div><h1 className="text-center" style={{width: "400px",margin: "auto",marginBottom: "30px",marginTop: "10px",backgroundColor: "yellow", borderRadius: "5px",boxShadow:"3px 3px 3px 3px red"}}>Employee Dashboard</h1></div>
    
        <table class="table table-striped table-bordered border-dark">
  <thead class="thead text-light bg-danger">
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Amount</th>
      <th scope="col">Status</th>

    </tr>
  </thead>
  <tbody style={{backgroundColor: 'yellow'}} >
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Flight</td>
      <td>1000</td>
      <td>Approved</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Food</td>
      <td>2000</td>
      <td>Approved</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Paul</td>
      <td>Cab</td>
      <td>5000</td>
      <td>Approved</td>
    </tr>
  </tbody>
</table>
<div className="text-center" style={{border: '2px solid black', width: '400px', margin: "auto", padding: "10px", boxShadow: "1px 1px black", backgroundColor: "yellow"}}>
        <button className="btn btn-danger btn-mdm">Manage</button>&nbsp;&nbsp; &nbsp;<span style={{fontSize:"30px"}}>&#10311;</span> &nbsp; &nbsp; &nbsp; &nbsp;  
        <button  className="btn btn-danger btn-mdm" style={{margin: "auto"}}>View</button> &nbsp;&nbsp;&nbsp;&nbsp;<span style={{fontSize:"30px"}}>&#10311;</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/addreimburse" ><button  className="btn btn-danger btn-mdm">Add</button></Link></div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        </div>
    )
}
export default ReimbursementEmployeepage;