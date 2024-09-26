import React from 'react'
import Navbar from './Navbar/Navbar'
import Comment from './Comment/Comment'
import Page1 from './Page1/Page1'

function App() {

  return (
    <>
    <Navbar/>
       <div className="h-screen overflow-y-scroll snap-y snap-mandatory  justify-center items-center">
      {/* Page 1 */}
      <section className=" ">
        <Page1/>
        <Comment/>
      </section>

      {/* Page 2 */}
      {/* <section className="h-screen  snap-start flex justify-center items-center">
       
      </section> */}

      {/* Page 3 */}
      {/* <section className="h-screen  snap-start flex justify-center items-center">
       
      </section> */}
      {/* <section className="h-screen  snap-start flex justify-center items-center">
       
       </section> */}

      {/* Page 5 */}
      {/* <section className="h-screen snap-start flex justify-center items-center">
        <Comment/>
      </section> */}
    </div>

    </>
  )
}

export default App
