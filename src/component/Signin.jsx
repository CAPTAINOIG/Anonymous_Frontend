import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'


const Signin = () => {
    let navigate = useNavigate()

    const [message, setMessage] = useState("")
    const schema = yup.object({
        userName: yup.string().required(),
        email: yup.string().email().required(),
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

let endpoint = 'http://localhost:4000/user/signin'
  const onSubmit = (data) => {
    axios.post(endpoint, data)
      .then((result) => {
        console.log(result.data);
        setMessage(result.data.message)
        if(result.data.status){
            navigate('/dashboard')
            localStorage.setItem('user', JSON.stringify(result.data))
            sweetalert()
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <section className='background'>
    <div className='absolute bg-blue-950 lg:w-[30%] mt-28 lg:ms-[480px] ms-[20px]  w-[90%] rounded px-2'>
    { message ?
      <div className='bg-red-700 mt-10 text-white font-bold text-center p-2 rounded'>
      {message}
      </div> : ''
    }
      <form action="" onSubmit={handleSubmit(onSubmit)}>
      <h1 className='text-center text-white font-bold text-2xl mt-5'>Sign In</h1>
      <div className='my-5 mt-5 text-white font-bold text-1xl'>
        <label htmlFor="">Username</label> <br />
        <input className='w-[100%] rounded text-black mt-2' {...register("userName")} />
        <p className='text-red-700'>{errors.userName?.message}</p>
      </div>
      <div className='my-5 text-white font-bold text-1xl'>
        <label htmlFor="">Email</label> <br />
        <input className='mt-2 w-[100%] rounded text-black' {...register("email")} />
        <p className='text-red-700'>{errors.email?.message}</p>
      </div>
      <button className='bg-white w-[100%] rounded text-xl text-blue-950 font-bold mb-10 my-5' type='submit'>submit</button>
      </form>
    </div>
    </section>
  )
}

export default Signin