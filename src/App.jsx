import React, { useEffect } from 'react'
import Navbar from './Navbar/Navbar'
import Comment from './Comment/Comment'
import Page1 from './Page1/Page1'
import { Helmet } from 'react-helmet'
import ReactGA from "react-ga4"

ReactGA.initialize("G-W0GS9X7B19");
function App() {

  useEffect(()=>{
    ReactGA.send({ hitType: "pageview", page: "window.location.pathname + window.location.search", title: "Lek Lai Yogyna" });

  },[])
  return (
    <>
    <Navbar/>
    <Helmet>
    <title>Lek Ladki Yojana Maharashtra - Government Scheme</title>
    <meta name="description" content="Learn about the Lek Ladki Yojana Maharashtra. Find details on how the scheme helps girls receive up to Rs. 1,01,000 from the government." />
    <meta name="keywords" content="Empowerment Scheme for Girls, Maharashtra Girl Child Support, Unique Assistance for Daughters, Lek Ladki Financial Aid, Female Child Funding Maharashtra, Innovative Girl Welfare Scheme, Lek Ladki Program Benefits, Specialized Aid for Girls Maharashtra, Government Support for Female Children, Maharashtra Girl Aid Initiative, Custom Assistance Program Maharashtra ,Lek Ladki Yojana, Maharashtra government schemes,Ladki Lek Yojana Maharashtra, Lek Ladki Yojana Maharashtra - Government Scheme" />

    </Helmet>

       <div className="h-screen  snap-y snap-mandatory  justify-center items-center">
      <section className=" ">
        <Page1/>
        <Comment/>
      </section>

  
    </div>

    </>
  )
}

export default App
