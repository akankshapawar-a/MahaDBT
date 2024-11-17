import React,{useEffect} from 'react'
import InformationData from './components/InformationData'
import Navbar from './components/Navbar'
import Comment from './components/Comment'
import ReactGA from 'react-ga4'
import {Helmet} from 'react-helmet'

ReactGA.initialize("G-GF4Z3P124C");

function App() {
  useEffect(()=>{
     ReactGA.send({ hitType: "pageview", page: "window.location.pathname + window.location.search", title: "mahaDBT Scholarship" });

 },[])
  return (
   <>
  <div>
    <Navbar/>
    <Helmet>
    <title>MahaDBT Scholarship - Government Scheme</title>
    <meta name="description" content="The Maha DBT scheme is a government of Maharashtra program that provides scholarships and subsidies to students and residents of the state" />
    <meta name="keywords" content="MahaDBT Scholarship , MahaDBT - Government Scheme ,MahaDBT Scholarship 2024-25: Schemes" />

    </Helmet>
    <InformationData/>
    <Comment/>
  </div>
   </>
  )
}

export default App
