import React from 'react'
import Navbar from './Navbar/Navbar'
import Comment from './Comment/Comment'
import Page1 from './Page1/Page1'

function App() {

  return (
    <>
    <Navbar/>
       <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      {/* Page 1 */}
      <section className="h-screen  snap-start flex ">
        <Page1/>
       
      </section>

      {/* Page 2 */}
      <section className="h-screen  snap-start flex justify-center items-center">
       
      </section>

      {/* Page 3 */}
      <section className="h-screen bg-green-500 snap-start flex justify-center items-center">
        <h1 className="text-4xl text-white">Page 3</h1>
      </section>

      {/* Page 4 */}
      <section className="h-screen bg-yellow-500 snap-start flex justify-center items-center">
        <h1 className="text-4xl text-white">Page 4</h1>
      </section>

      {/* Page 5 */}
      <section className="h-screen snap-start flex justify-center items-center">
        <Comment/>
      </section>
    </div>

    </>
  )
}

export default App
