import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup'

const LoginManagerpage = () => {

    //const [login, setLogin] = useState({
        const initialValues = {
        email: '',
        password: '',
        managerId: ''

    }
    const onSubmit = (values) => {
        console.log(values)
    }
    const validationSchema = Yup.object({
        email: Yup.string().required('email is required').email('email should be valid'),
        password: Yup.string().required('password is required').min(6,'password should be of atleast 6 digits'),
        managerId: Yup.string().required('manager id is required').min(4,'manager id whould be atleast of 4 digits')
    })
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        validateOnMount : true
    })

   /*  const onChangeHandler = (event) => {
        console.log(event.target.name)
        console.log(event.target.value)
        setLogin({
            ...login,
            [event.target.name]: event.target.value
        })
    } */
    return (
        <div className="container2">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="wrapper" style={{
                        backgroundColor: 'yellow', width: "700px"
                    }}>
                        <h2 className='text-center' style={{color: "black", textShadow: "2px 2px blue", fontSize:'45px'}}><b>Manager Login</b></h2>
                        <hr />
                        <form onSubmit={formik.handleSubmit}>
                            <div className="form-group">
                                <label className='txt'>Email ID</label>
                                <input type="email" name="email" className={formik.touched.email && formik.errors.email ? 'form-control is-invalid' : 'form-control'} value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}  />
                                {formik.touched.email && formik.errors.email ? (
                                    <small className='text-danger'>{formik.errors.email}</small>
                                ) : null}
                            </div>
                            <div>
                            <label for="type" className='txt'>Type</label><br/>
                               <select className="form-control" name="" id="type">
                                <option>--select type--</option>
                                <option value="employee">Employee</option>
                                <option value="manager">Manager</option>
                               </select>
                            </div><br/>
                            <div>
                                <label className='txt'>Manager Unique ID</label>
                                <input type="managerId" name="managerId" className={formik.touched.managerId && formik.errors.managerId ? 'form-control is-invalid' : 'form-control'} value={formik.values.managerId} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                {formik.touched.managerId && formik.errors.managerId ? (
                                    <small className='text-danger'>{formik.errors.managerId}</small>
                                ) : null}
                            </div>
                            <div>
                                <label className='txt'>Password</label>
                                <input type="password" name="password" className={formik.touched.password && formik.errors.password ? 'form-control is-invalid' : 'form-control'} value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                {formik.touched.password && formik.errors.password ? (
                                    <small className='text-danger'>{formik.errors.password}</small>
                                ) : null}
                            </div><br />
                            <div>
                            <Link to="/reimbursemang" style={{textDecoration: "none"}}><button className="btn btn-primary btn-block" disabled={!formik.isValid}>Login</button></Link>
                                <hr />
                            <div className='text-center'>Not a Manager ?<Link to="/employee" className='registerch'>Click here</Link></div>
                            <div className="text-center"><Link to="/" className='' style={{color:'blue', textDecoration: "none"}}><span style={{fontSize:'40px'}}>&#9754;</span>Go back home</Link></div>
                            
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default LoginManagerpage;