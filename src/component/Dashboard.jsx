import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import copy from 'clipboard-copy'; // Import clipboard-copy library

const Dashboard = () => {
  const [userData, setUserData] = useState('');
  const avatarImageUrl = 'https://example.com/avatar.jpg'; // Replace with your avatar URL

  useEffect(() => {
    let userDetail = JSON.parse(localStorage.getItem('user'));
    console.log(userDetail);
    console.log(userDetail.userName);
    setUserData(userDetail.userName);
  }, []);

  const handleCopyAvatarClick = () => {
    
    copy(`https://beautiful-taffy-79e1d2.netlify.app/message/${userData}`)

      .then(() => {
        alert('Avatar URL copied to clipboard!');
      })
      .catch((error) => {
        console.error('Failed to copy to clipboard: ', error);
      });
  };

  return (
    <>
      <div className='background'>
        <div className='absolute bg-blue-950 lg:w-[30%] mt-48 lg:ms-[480px] ms-[20px]  w-[90%] rounded px-2'>
          <h1 className='text-4xl text-center my-3 text-white font-bold font-serif'>Hi, {userData}</h1>
          <div className='text-center'>
            <a className='text-red-500 my-2 hover:text-fuchsia-500  font-serif'>{`https://beautiful-taffy-79e1d2.netlify.app/message/${userData}`}</a><br />
            <button onClick={handleCopyAvatarClick} className='text-white my-2 hover:text-blue-500  font-serif'>Copy Avatar</button>
          </div>
          <p className='text-white font-serif'>Copy your profile link ❤ to get responses from your friend. to check out responses you can go to "View Messages". 🍟😃 </p>
          <div id='view' className='my-5 h-10 text-center items-center rounded-lg'>
            <Link className='hover:text-blue-950 text-xl font-serif text-white' to="/View">View Messages</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
