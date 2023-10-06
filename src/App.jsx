import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './component/Landing'
import Signup from './component/Signup'

import Signin from './component/Signin'
import Dashboard from './component/Dashboard'
import Message from './component/Message'
import View from './component/View'
import Faqs from './component/Faqs'
import About from './component/About'



function App() {
  

  return (
    <>
    
    
     <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/faqs' element={<Faqs/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/message/:userName' element={<Message/>}/>
        <Route path='/view' element={<View/>}/>
     </Routes>
    </>
  )
}

export default App
