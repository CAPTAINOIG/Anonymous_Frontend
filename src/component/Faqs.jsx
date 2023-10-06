import React from 'react'
import {AiOutlineArrowDown} from 'react-icons/ai'
import {AiOutlineArrowRight} from 'react-icons/ai'

const Faqs = () => {
    const down = () => {
        document.querySelector('#myRight').style.display = 'block'
        document.querySelector('#myDown').style.display = 'none'
        document.querySelector('#myP').style.display = 'none'
    }
    const right = () => {
        document.querySelector('#myDown').style.display = 'block'
        document.querySelector('#myRight').style.display = 'none'
        document.querySelector('#myP').style.display = 'block'
    }
    const downOne = () => {
        document.querySelector('#myRight1').style.display = 'block'
        document.querySelector('#myDown1').style.display = 'none'
        document.querySelector('#myP1').style.display = 'none'
    }
    const rightOne = () => {
        document.querySelector('#myDown1').style.display = 'block'
        document.querySelector('#myRight1').style.display = 'none'
        document.querySelector('#myP1').style.display = 'block'
    }
    const downTwo = () => {
        document.querySelector('#myRight2').style.display = 'block'
        document.querySelector('#myDown2').style.display = 'none'
        document.querySelector('#myP2').style.display = 'none'
    }
    const rightTwo = () => {
        document.querySelector('#myDown2').style.display = 'block'
        document.querySelector('#myRight2').style.display = 'none'
        document.querySelector('#myP2').style.display = 'block'
    }
    const downThree = () => {
        document.querySelector('#myRight3').style.display = 'block'
        document.querySelector('#myDown3').style.display = 'none'
        document.querySelector('#myP3').style.display = 'none'
    }
    const rightThree = () => {
        document.querySelector('#myDown3').style.display = 'block'
        document.querySelector('#myRight3').style.display = 'none'
        document.querySelector('#myP3').style.display = 'block'
    }
  return (
    <>
        <div className='lg:top-0 lg:mb-[50px] mb-[90px]'>
            <h1 className='text-center text-blue-950 py-2 text-3xl font-bold '>Frequently Asked Questions</h1> <hr />
            <section>
                <div>
                    <div className='flex my-5 mx-10 px-5 py-3 bg-blue-950 text-[#ae1e55] rounded-xl'>
                        <span className='flex'>
                            <span id='myDown' className='hidden my-1 mx-1 text-white' onClick={down}><AiOutlineArrowDown/></span> 
                            <span id='myRight' onClick={right} className=' my-1 mx-1 text-white'><AiOutlineArrowRight/></span>
                        </span>
                        <div>
                            <p>Is my mesaage really anonymous as a sender?</p>
                            <p  id='myP' className='hidden'>- Yeah Absolutely!!. No one, including the receiver of your message would find out who you are.</p>
                        </div>
                       </div>
                    <div className='flex my-10 mx-10 px-5 py-3 bg-blue-950 text-[#ae1e55] rounded-xl'>
                    <div className='flex'>
                            <span id='myDown1' className='hidden my-1 mx-1 text-white' onClick={downOne}><AiOutlineArrowDown/></span>
                            <span id='myRight1' onClick={rightOne}  className=' my-1 mx-1 text-white'><AiOutlineArrowRight/></span>
                        </div>
                        <div>
                            <p>Can i send a picture anonymously?</p>
                            <p id='myP1' className='hidden'>- No. Not yet, probably in the future.</p>
                        </div>
                    </div>
                    <div className='flex my-10 mx-10 px-5 py-3 bg-blue-950 text-[#ae1e55] rounded-xl'>
                    <div className='flex'>
                            <span id='myDown2' className='hidden my-1 mx-1 text-white' onClick={downTwo}><AiOutlineArrowDown/></span> 
                            <span id='myRight2' onClick={rightTwo} className=' my-1 mx-1 text-white'><AiOutlineArrowRight/></span>
                        </div>
                        <div>
                            <p>How long before this message is delivers?</p>
                            <p id='myP2' className='hidden'>- As soon as you hit send</p>
                        </div>
                    </div>
                    <div className='flex my-10 mx-10 px-5 py-3 bg-blue-950 text-[#ae1e55] rounded-xl'>
                    <div className='flex'>
                            <span id='myDown3' className='hidden my-1 mx-1 text-white' onClick={downThree}><AiOutlineArrowDown/></span> 
                            <span id='myRight3' onClick={rightThree} className=' my-1 mx-1 text-white'><AiOutlineArrowRight/></span>
                        </div>
                        <div>
                            <p>Who can i send my anonymous message link to?</p>
                            <p id='myP3' className='hidden'>- Absolutely anyone.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>
  )
}

export default Faqs