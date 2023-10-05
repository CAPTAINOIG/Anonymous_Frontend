import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'




// <div className='border border-red-500'>
// <div className='border p-20 my-2 bg-blue-950 opacity-80 rounded-xl'>
//       <h1 className='text-xl font-bold text-fuchsia-500'>Hi, {userData}</h1>
//       <p className=' my-2 text-fuchsia-500'>Copy the link below to get anonymous messages</p>
//       <a className='text-red-500 my-2 hover:text-fuchsia-500'>http://localhost:5173/message/{userData}</a><br />
//       <div className='my-5'>
//         <Link className='border py-2 rounded px-[2px] text-blue-950 bg-fuchsia-500 hover:bg-blue-950 hover:text-white' to="">View Messages</Link>
//       </div>
// </div>
// </div>

const Dashboard = () => {
    const [userData, setUserData] = useState("")

    useEffect(() => {
        let userDetail =JSON.parse(localStorage.getItem('user')) 
        console.log(userDetail.result.userName);
        setUserData(userDetail.result.userName)
      
    }, [])
    
  return (
    <>
    <div className='background'>
    <div className='absolute bg-blue-950 lg:w-[30%] mt-48 lg:ms-[480px] ms-[20px]  w-[90%] rounded px-2'>
          <h1 className='text-4xl text-center my-3 text-white font-bold font-serif'>Hi, {userData}</h1>
          <a className='text-red-500 my-2 hover:text-fuchsia-500 lg:ms-16 font-serif'>http://localhost:5173/message/{userData}</a><br />
          <p className='text-white font-serif'>Copy your profile link ❤ to get responses from your friend. to check out responses you can go to "View Messages". 🍟😃 </p>
          <div id='view' className='my-5 h-10 text-center items-center rounded-lg'>
            <Link className='hover:text-blue-950 text-xl font-serif text-white' to="/View">View Messages</Link>
          </div>
    </div>
  </div>
    </>
  )
}

export default Dashboard