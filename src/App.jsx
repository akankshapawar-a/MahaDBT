import React from 'react'
import InformationData from './components/InformationData'
import Navbar from './components/Navbar'
import Comment from './components/Comment'

function App() {

  return (
   <>
  <div>
    <Navbar/>
    <InformationData/>
    <div className='w-full'>
    <Comment/>
    </div>
  </div>
   </>
  )
}

export default App
