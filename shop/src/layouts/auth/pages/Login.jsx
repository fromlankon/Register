import React, { useState } from 'react'
import "../../main/components/Form.css"
import { Link } from 'react-router-dom'
import Header from '../../main/components/Header'
import { useFormik } from 'formik';
import { LoginCall } from '../../main/services/auth';

export default function Login() {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      LoginCall(values)
        .then(({ data }) => {
          console.log(data)
          localStorage.setItem("token", data.data.token)
        })
        .catch((err) => {
          console.log(err)
        })
    },
  });

  const [hide, setHide] = useState(false)

  return (
    <>
      <div className='headerPosition'>
        <Header />
      </div>

      <div className='register'>
        <form className='registerForm' onSubmit={formik.handleSubmit}>
          <p className='signup'> Sign in </p>
          <div className='signinMain'>
            <div className='label'>
              <label htmlFor="signinMail"> Your email </label>
              <input name="email" onChange={formik.handleChange} value={formik.values.email} type="mail" id='signinMail' required="" />
            </div>
            <div className='label'>
              <label htmlFor="signinPassword"> Password </label>
              <input name="password" onChange={formik.handleChange} value={formik.values.password} type={hide ? "name" : "password"} id='signinPassword' required="" />
              <i onClick={() => setHide(!hide)} className={hide ? "bi-eye-fill" : "bi-eye-slash-fill"}></i>
            </div>
             <button type='Submit'> Sign In </button>
            <p className='dontHave'> Don't have an account? <Link to={"/auth/register"} className='signupLink'> Sign up </Link> </p>
          </div>
        </form>
      </div>
    </>
  )
}
