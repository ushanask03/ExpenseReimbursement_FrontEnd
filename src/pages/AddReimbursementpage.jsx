import NavbarReimbursement from "../components/NavbarReimbursement"

const AddReimbursementpage = () => {
    return (
        <div style={{backgroundColor: "black", minHeight:"700px"}}>
        <NavbarReimbursement />
        <div className="bg-warning" style={{width: "600px", margin: "auto",marginTop: "30px", padding:"20px"}}>
            <h2>Add your Reimbursement requests here</h2>
        <div className="form-group">
            <form>
                <label for="id">Employee Id</label>
                <input type="text" className="form-control" id="id"/> 
                <label for="title">Title</label>
                <input type="text" className="form-control" id="id"/> 
                <label for="description">Description</label>
                <textarea className="form-control" id="description"></textarea>
                <label for="id">Amount</label>
                <input type="number" className="form-control" id="id"/> <br/><hr/>
                <div className="text-center"><button type="submit" class="btn btn-danger mb-2">Submit</button></div>
            </form>
        </div>
        </div>
</div>
    )
}
export default AddReimbursementpage;