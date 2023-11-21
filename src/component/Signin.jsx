import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
// import {FiLoader} from 'react-icons/fi'
import gif from '../assets/image/gif.gif'


const Signin = () => {
    let navigate = useNavigate()

    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const schema = yup.object({
        userName: yup.string().required(),
        password: yup.string().required(),
      })
      .required()
      
      
      
        const {register, handleSubmit, formState: { errors },} = useForm({
          resolver: yupResolver(schema),
        })
      

        const sweetalert =()=>{
            swal({
                title: "User Signed in Successfully!",
                icon: "success",
                button: "Aww yiss!",
              });
        } 

        const sweetAlertError = (message) => {
          swal({
            title: 'Error',
            text: message,
            icon: 'error',
            button: 'OK',
          });
        };
      

// let endpoint = 'http://localhost:4000/user/signin'
let endpoint = 'https://anonymous-backend-o0f2.onrender.com/user/signin'
  const onSubmit = (data) => {
    setLoading(true)
    axios.post(endpoint, data)
      .then((result) => {
        console.log(result.data.user);
        setMessage(result.data.message)
        if(result.data.status){
            navigate('/dashboard')
            localStorage.setItem('user', JSON.stringify(result.data.user))
            sweetalert()
        }
       else {
        sweetAlertError(result.data.message);
        setLoading("")
      }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false)
      })
  }

  return (
    <section className='background'>
    <div className='absolute bg-blue-950 lg:w-[30%] mt-28 lg:ms-[480px] ms-[20px]  w-[90%] rounded px-2'>
   
      <form action="" onSubmit={handleSubmit(onSubmit)}>
      <h1 className='text-center text-white font-bold text-2xl mt-5'>Sign In</h1>
      <div className='my-5 mt-5 text-white font-bold text-1xl'>
        <label htmlFor="">Username</label> <br />
        <input className='w-[100%] rounded text-black mt-2' {...register("userName")} />
        <p className='text-red-700'>{errors.userName?.message}</p>
      </div>
      <div className='my-5 text-white font-bold text-1xl'>
        <label htmlFor="">Password</label> <br />
        <input className='mt-2 w-[100%] rounded text-black' {...register("password")} />
        <p className='text-red-700'>{errors.password?.message}</p>
      </div>
      <button className='bg-white w-[100%] rounded text-xl text-blue-950 font-bold mb-10 my-5' type='submit'>
        {loading ? <div className='flex justify-center'><img src={gif} alt="" width={30} /></div>  : 'Submit'}
        </button>


      
      <div className='flex justify-between text-white mb-5'>
        <p>Don't have Account?</p>
        <Link to="/signup">Sign up Here</Link>
      </div>
      </form>
      
    </div>
    </section>
  )
}

export default Signin