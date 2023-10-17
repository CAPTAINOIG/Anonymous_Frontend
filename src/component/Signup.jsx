import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
// import loader from '../assets/image/loader.png';
// import {FiLoader} from 'react-icons/fi'
import gif from '../assets/image/gif.gif'

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const schema = yup.object({
    userName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup
      .string()
      .matches(/[a-z]/, 'Must include lowercase letter')
      .matches(/[A-Z]/, 'Must include uppercase letter')
      .matches(/[0-9]/, 'Must include a number')
      .min(8, 'Must be at least 8 characters long')
      .required(),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const sweetAlertSuccess = () => {
    swal({
      title: 'Congratulations',
      text: 'User signed up successfully',
      icon: 'success',
      button: 'Aww yiss!',
    });
  };

  const sweetAlertError = (message) => {
    swal({
      title: 'Error',
      text: message,
      icon: 'error',
      button: 'OK',
    });
  };

  const endpoint = 'https://anonymous-backend-o0f2.onrender.com/user/signup';

  const onSubmit = (data) => {
    setLoading(true);
    axios
      .post(endpoint, data)
      .then((result) => {
        console.log(result.data.message);
        if (result.data.status) {
          sweetAlertSuccess();
          navigate('/signin');
        } else {
          sweetAlertError(result.data.message);
          setLoading("")
        }
      })
      .catch((err) => {
        console.log(err);
        sweetAlertError('An error occurred while signing up.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="background">
      <div className="absolute bg-blue-950 lg:w-[30%] mt-28 lg:ms-[480px] ms-[20px]  w-[90%] rounded px-2">
        {errorMessage && (
          <div className="bg-red-700 mt-10 text-white font-bold text-center p-2 rounded">
            {errorMessage}
          </div>
        )}
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-center text-white font-bold text-2xl mt-5">Sign Up</h1>
          <div className="my-5 mt-5 text-white font-bold text-1xl">
            <label htmlFor="userName">Username</label> <br />
            <input className="w-[100%] rounded text-black mt-2" {...register('userName')} />
            <p className="text-red-700">{errors.userName?.message}</p>
          </div>
          <div className="my-5 text-white font-bold text-1xl">
            <label htmlFor="email">Email</label> <br />
            <input className="mt-2 w-[100%] rounded text-black" {...register('email')} />
            <p className="text-red-700">{errors.email?.message}</p>
          </div>
          <div className="my-5 text-white font-bold text-1xl">
            <label htmlFor="password">Password</label> <br />
            <input className="mt-2 w-[100%] rounded text-black" {...register('password')} />
            <p className="text-red-700">{errors.password?.message}</p>
          </div>
          <button className="bg-white w-[100%] rounded text-xl text-blue-950 font-bold mb-10 my-5" type="submit">
            {loading ? <div className='flex justify-center'><img src={gif} alt="" width={30} /></div> : 'Submit'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Signup;
