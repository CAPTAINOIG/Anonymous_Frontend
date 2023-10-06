import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import swal from 'sweetalert'


const Message = () => {
    const [message, setMessage] = useState("")
    const [sentMessage, setSentMessage] = useState("")
    let {userName} = useParams()
    
    // let endpoint = 'https://anonymous-backend-o0f2.onrender.com/user/message'
    
    

    const sweetAlert = () => {
      swal({
        title: "congratulations",
        text: "Message sent successfully",
        icon: "success",
        button: "Aww yiss!",
      });
  
    }

    let date = new Date().toLocaleDateString()
    let time = new Date().toLocaleTimeString()
    
    // let endpoint = 'http://localhost:4000/user/message'
let endpoint = 'https://anonymous-backend-o0f2.onrender.com/user/message'

    const userMessage =()=> {
        let data = {message, time, date, userName}
        console.log(data);
        if(message == ''){
          setSentMessage('Input cannot be empty')
        } else{
          axios.post(endpoint, data)
          .then((result)=>{
            console.log(result);
            setSentMessage('')
            sweetAlert()
            localStorage.setItem('details', JSON.stringify(data))
            localStorage.setItem('detailsTwo', JSON.stringify(result))
          })
          .catch((err)=>{
            console.log(err);
            setSentMessage(result.data.message) 
        })
      }
    }
    

    const maxLength = 200; 
    useEffect(() => {
        const charactersLeft = maxLength - message.length;
        const countDownColor = charactersLeft < 0 ? 'red' : '#333';
        document.getElementById('countDown').textContent = charactersLeft;
        document.getElementById('countDown').style.color = countDownColor;
      }, [message]);


  return (
    <section className='background'>
    <div className='absolute font-serif bg-blue-950 lg:w-[30%] mt-28 lg:ms-[480px] ms-[20px]  w-[90%] rounded px-2'>
          <div className='text-red-900 text-1xl font-bold'>{sentMessage}</div>
          <p className='text-yellow-500'>Say Something About Me*</p>
          <p className='text-yellow-500 text-xl py-2'>Leave a message for <span className='font-bold text-red-200'>{userName} </span> here</p>
            <textarea className='w-[100%] text-black' name="" id="" cols="30" rows="7" maxLength={maxLength} onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
            <div id="charCount" className="text-sm text-fuchsia-700 font-serif">Characters left: <span id="countDown" className="font-bold text-red-700">200</span></div>

            <button className='bg-fuchsia-700 w-[100%] rounded text-xl text-blue-950 font-bold mb-10 my-5' onClick={userMessage}>Send Message</button>
        </div>
    </section>
  )
}

export default Message