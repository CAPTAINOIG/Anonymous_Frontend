import axios from 'axios'
import React, { useEffect, useState } from 'react'


const View = () => {
    const [detail, setDetail] = useState("")
    // let time = new Date().toLocaleTimeString()
    // let date = new Date().toLocaleDateString()
    // console.log(date);

    useEffect(() => {
        let data =JSON.parse(localStorage.getItem('details'))
        console.log(data); 
        setDetail(data)
    }, [])
    
    // let endpoint = 'http://localhost:4000/user/view'
    //     axios.post(endpoint)
    //     .then((result)=>{
    //         console.log(result);
    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //     })
  return (
    
      
        <>
       <section className='background'></section>
        </>
                
                )
}

export default View