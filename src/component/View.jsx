import axios from 'axios'
import React, { useEffect, useState } from 'react'

const View = () => {
    const [message, setMessage] = useState([])

    let endpoint = 'https://anonymous-backend-o0f2.onrender.com/user/view'

    useEffect(() => {
        let userDetail = JSON.parse(localStorage.getItem('user'))
        const userName = userDetail.userName;
        const email = userDetail.email;
        let myUser = { userName, email }

        axios.post(endpoint, myUser)
            .then((result) => {
                setMessage(result.data.result);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    let endpoint2 = 'https://anonymous-backend-o0f2.onrender.com/user/delete';

    const removeItem = (message, time, date) => {
        let item = { message, time, date };
        axios.post(endpoint2, item)
            .then((result) => {
                // Remove the deleted item from the message state
                const updatedMessages = message.filter(
                    (item) =>
                        item.message !== message &&
                        item.time !== time &&
                        item.date !== date
                );
                setMessage(updatedMessages);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <>
        <section className='background1'>
        <div className='absolute bg-blue-950 lg:w-[30%] lg:ms-[480px] ms-[20px] lg:mt-10 mt-10  w-[90%] rounded px-2'>
            <div className='lg:mb-[10px] md:mb-[200%] mb-[200%] p-2 text-white lg:mt-0 md:mt-0  lg:gap-20 gap-2 '>
                <h1 className=' font-bold text-4xl text-center'>My Answers</h1>
                <p className=''>Scroll down to check out the messages that you have received 👇👇</p>
                {message.length === 0 ? (
                    <div className=' py-2 px-2 text-center text-white'>
                        <p>Oops! No one has sent you a message</p>
                    </div>
                ) : (
                    message.map((item, i) => (
                        <div className=' py-2 px-2 text-center border rounded mb-5' key={i}>
                            <p>Message: {item.message}</p>
                            <p>Time of the Message: {item.time}</p>
                            <p>Date of the Message: {item.date}</p>
                            <button className='bg-red-900 w-[100%]' onClick={() => removeItem(item.message, item.time, item.date)}>Delete</button>
                        </div>
                    ))
                )}
            </div>
        </div>
    </section>
        </>
    )
}

export default View
