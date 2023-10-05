import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import swal from 'sweetalert'


const Message = () => {
    const [message, setMessage] = useState("")
    const [sentMessage, setSentMessage] = useState("")
    let {userName} = useParams()
    
    let endpoint = 'http://localhost:4000/user/message'



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

    const userMessage =()=> {
        let data = {message, time, date, userName}
        console.log(data);
        if(message == ''){
          setSentMessage('Input cannot be empty')
        } else{
          axios.post(endpoint, data)
          .then((result)=>{
            console.log(result.data.message);
            setSentMessage(result.data.message)
           
            localStorage.setItem('details', JSON.stringify(result.data))
            // if(message){
            //  const storage = localStorage.getItem('userDetail')
            //  if(storage){
            //          let data = JSON.parse(storage) 
            //          data.push(message)
  
            //         localStorage.setItem("userDetail", JSON.stringify(result.data));
            //     }
            //     else{
            //              let newData = []
            //              newData.push(message)
            //             localStorage.setItem("userDetail", JSON.stringify(newData));
                        
            //           }
            // }
            // if (message) {
            //   const storage = localStorage.getItem('formy')
            //   if(storage){
            //       let data = JSON.parse(storage) 
            //       data.push(message)

            //       localStorage.setItem("formy", JSON.stringify(data));
            //   }
            //   else{
            //       let newData = []
            //       newData.push(message)
            //       localStorage.setItem("formy", JSON.stringify(newData));
                  
            //     }
            sweetAlert()
            setMessage('')
        })
        .catch((err)=>{
          console.log(err);
        })
      }
    }
    
  return (
    <div>
        <div>
        
        
          <div>{sentMessage}</div>
        
            <textarea name="" id="" cols="30" rows="10" onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
            <button onClick={userMessage}>Send Message</button>
        </div>
    </div>
  )
}

export default Message