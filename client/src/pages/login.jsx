//Login page

import React from 'react'
import '../assets/login.css'
import { useFormik } from "formik"
import { Link } from 'react-router-dom'
import { useLogin } from '../hooks/useLogin'
import { loginSchema } from '../schemas'
import { encrypt } from '../utils'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

const initialValues = {
    email: "",
    password: ""
}

export const Login = () => {

    const { login, error, isLoading } = useLogin()
    //const navigate = useNavigate();

    const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues,
        validationSchema: loginSchema,
        onSubmit: async ({email, password}, action, e) => {
            // console.log(values)
            action.resetForm();
            const encryptedPassword = encrypt(password)
            

            await login(email, encryptedPassword)
            // await login(email, password)
        }
    })



    return (
        <div className='login'>

            <img src="" className='loginImage' alt=''/>

            <div className='login_content'>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className='login_account'>
                    <label htmlFor="email">Email<span className='req'>*</span></label>
                        <input placeholder='Email' type='email' name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} />
                        {errors.email && touched.email ? (<span className='validation-error'>{errors.email}</span>) : null}
                    </div>

                    <div className='login_account'>
                    <label htmlFor="password">Password<span className='req'>*</span></label>
                        <input type='password' name='password' placeholder='Password' value={values.password} onChange={handleChange} onBlur={handleBlur} />
                        {errors.password && touched.password ? (<span className='validation-error'>{errors.password}</span>) : null}
                    </div>
                    
                    <div className='login_forgot'>
                        <button type='submit' disabled={isLoading} className='btn_solid'>Submit</button>
                        {error && <span className='err'>{error}</span>}
                    <span>Forgot Password?<Link to='/resetpasswordotp' state={{mail: values.email}}>Reset it</Link></span>
                    </div>
                    
                </form>
            </div>
            <ToastContainer/>
        </div>
    )
}
