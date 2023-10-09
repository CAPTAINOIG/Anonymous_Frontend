import React from 'react'
import Questions from '../assets/image/Questions.gif'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
   <>
   <div className='background'>
   <div className='text-center text-white text-xl font-bold'>This is an Errorpage
   <Link className='ms-10' to="/">Go Back</Link>
   </div>
   <img className='mx-auto rounded' src={Questions} alt="" />
   </div>
   </>
  )
}

export default Error