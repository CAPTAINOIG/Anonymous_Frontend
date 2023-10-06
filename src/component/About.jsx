import React from 'react'

const About = () => {
  return (
    <>
        <div>
            <section className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 border border-[#ae1e55]'>
                <div className='lg:bg-[#ae1e55] bg-red-500 px-4 py-5'>
               <h1  className='font-bold text-2xl mt-20'>About</h1> 
                <p> Welcome to our anonymous app, a platform where your voice matters, and your identity remains a secret. We believe that everyone should have the freedom to express themselves without fear of judgment, discrimination, or exposure. With this app, you can connect with others, share your thoughts, seek advice, and engage in candid conversations—all while preserving your anonymity.
                </p>
                </div>
                <div className='bg-blue-950 h-screen text-[#ae1e55] text-red-500 px-4 py-5'>
                <h1 className='font-bold text-2xl mt-20'>Our Mission</h1> 
                <p> At anonymous app, our mission is to create a safe and supportive environment for open and honest communication. We understand that there are times when you want to discuss personal matters, explore new ideas, or simply connect with people who share your interests, without revealing your true identity. That's where we come in. We provide a platform that prioritizes your privacy while fostering meaningful connections.
                </p>
                </div>
            </section>
        </div>
    </>
  )
}

export default About