import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup'


const LoginEmployeepage = () => {

    //const [login, setLogin] = useState({
        const initialValues = {
        email: '',
        password: '',
        employeeId: ''

    }
    const onSubmit = (values) => {
        console.log(values)
    }
    const validationSchema = Yup.object({
        email: Yup.string().required('email is required').email('email should be valid'),
        password: Yup.string().required('password is required').min(6,'password should be of atleast 6 digits'),
        employeeId: Yup.string().required('employee id is required').min(8,'password should be atleast of 8 digits')
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
        <div className="container1">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="wrapper" style={{
                        backgroundColor: 'yellow',width: '700px'
                    }}>
                        <h2 className='text-center' style={{color: "black", textShadow: "2px 2px #ff0000", fontSize:'45px'}}><b>Employee Login</b></h2>
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
                                <label className='txt'>Employee ID</label>
                                <input type="email" name="employeeId" className={formik.touched.employeeId && formik.errors.employeeId ? 'form-control is-invalid' : 'form-control'} value={formik.values.employeeId} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                {formik.touched.employeeId && formik.errors.employeeId ? (
                                    <small className='text-danger'>{formik.errors.employeeId}</small>
                                ) : null}
                            </div><br/>
                            <div>
                                <label className='txt'>Password</label>
                                <input type="password" name="password" className={formik.touched.password && formik.errors.password ? 'form-control is-invalid' : 'form-control'} value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                {formik.touched.password && formik.errors.password ? (
                                    <small className='text-danger'>{formik.errors.password}</small>
                                ) : null}
                            </div><br /><br/>
                            <div>
                            <Link to="/reimburseemp" style={{textDecoration: "none"}}><button className="btn btn-danger btn-block" disabled={!formik.isValid}>Login</button></Link>
                                <hr />
                            <div className='text-center '>Not an Employee?<Link to="/manager" className='registerch'>Click here</Link></div>
                            <div className="text-center"><Link to="/" className='' style={{color:'red', textDecoration: 'none'}}><span style={{fontSize:'40px'}}>&#9754;</span>Go back home</Link></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default LoginEmployeepage;