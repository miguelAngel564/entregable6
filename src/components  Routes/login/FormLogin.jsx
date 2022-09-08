import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'

const FormLogin = () => {

const {register, handleSubmit, reset } = useForm()

// handleSubmit es el mommento p ara envair la informcaion 

const submit = data => {
const URl = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login'
axios.post(URl, data)
.then(res => {
    console.log(res.data)
    localStorage.setItem('token',res.data.data.token)
})
.catch(err => console.log(err))

// console.log(data)
// reset({
//     email: '',
//     password:''
//     })
}

// localeStorage es para guardar informacion alli
  return (
<form onSubmit={handleSubmit(submit)} className='login__form'>
      <h2 className='login__title'>Welcome! <br /> Enter your email and <br /> password to continue</h2>
      <div className='login__div-email'><br />
        <label className='login__label' htmlFor="email"><br /> Email <br /></label>
        <input {...register('email')} className='login__input' type="email" id="email" />
      </div>
      <div className='login__div-password'>
        <label className='login__label' htmlFor="password"><br /> Password <br /></label>
        <input  {...register('password')} className='login__input' type="password" id="password" />
    <br /><br /><button className='login__btn'>  Login </button>
      </div>
    </form>

  )
}

export default FormLogin