import React from 'react'
import { Link } from 'react-router-dom'

import {GiSpiderMask}  from 'react-icons/gi'
import Navbar from './Navbar'
import Footer from './Footer'



const Landing = () => {
  let mySection = {
    position: 'absolute',
    top: '43%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
}
  return (
    <>
    <Navbar/>
       <div className='background'>
            <div style={mySection} className='bg-blue-950 lg:pt-10 mt-10 font-serif text-center flex flex-col justify-center items-center rounded-xl px-2 lg:w-1/3 md:w-1/2 w-[90%]'>
              <p className='text-white mt-10 text-5xl'><GiSpiderMask size={100}/></p>
              <h1 className='text-4xl font-bold text-white mt-10'>Welcome</h1>
              <h2 className='text-white font-semibold mt-10'>Here you can send and receive message anonymously</h2>
              <Link className='underline text-white mb-10 font-semibold mt-5 text-2xl' to="/signup">Sign up here</Link>
            </div>
            </div>
            <Footer/>
    </>
  )
}

export default Landing