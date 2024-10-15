import React from 'react'
import InformationData from './components/InformationData'
import Navbar from './components/Navbar'
import Comment from './components/Comment'
import { HelmetProvider } from 'react-helmet-async';

function App() {

  return (
    <HelmetProvider>

   <>
  <div>
    <Navbar/>
    <InformationData/>
    <div className='w-full'>
    <Comment/>
    </div>
  </div>
   </>
   </HelmetProvider>

  )
}

export default App
