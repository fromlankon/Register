import React, { useState } from 'react'
import "../../main/components/Form.css"
import { Link } from 'react-router-dom'
import Header from '../../main/components/Header'
import { useFormik } from 'formik';
import { RegisterCall } from '../../main/services/auth';

export default function Register() {

  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      email: '',
      password: '',
    },
    onSubmit: values => {
      RegisterCall(values)
        .then(({ data }) => {
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
          <p className='signup'> Sign up </p>
          <div className='signinMain'>
            <div className='label'>
              <label htmlFor="signinName"> Your name </label>
              <input name="name" onChange={formik.handleChange} value={formik.values.name} type="name" id='signinName' required="" />
            </div>
            <div className='label'>
              <label htmlFor="signinSurname"> Your surname </label>
              <input name="surname" onChange={formik.handleChange} value={formik.values.surname} type="name" id='signinSurname' required="" />
            </div>
            <div className='label'>
              <label htmlFor="signinMail"> Your email </label>
              <input name="email" onChange={formik.handleChange} value={formik.values.email} type="mail" id='signinMail' required="" />
            </div>
            <div className='label'>
              <label htmlFor="signinPassword"> Password </label>
              <input name="password" onChange={formik.handleChange} value={formik.values.password} type={hide ? "name" : "password"} id='signinPassword' required="" />
              <i onClick={() => setHide(!hide)} className={hide ? "bi-eye-fill" : "bi-eye-slash-fill"}></i>
            </div>
            <div className='checkboxLabel'>
              <input type="checkbox" id='signinCheckbox' />
              <label htmlFor="signinCheckbox"> I accept the <Link className='terms'> Terms and Conditions </Link> </label>
            </div>
            <button type='Submit'> Sign up </button>
            <p className='dontHave'> Already have an account? <Link to={"/auth/login"} className='signupLink'> Sign in </Link> </p>
          </div>
        </form>
      </div>
    </>
  )
}
