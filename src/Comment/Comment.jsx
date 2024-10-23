import React, { useRef } from 'react'
import emailjs from 'emailjs-com';
import { Helmet } from 'react-helmet'
import ReactGA from "react-ga4"

const Comment = () => {

  const formRef = useRef(null);
  
  
  function sendEmail(event) {
    event.preventDefault();
    ReactGA.event({
      category: "button",
      action: "submit",
      label: "Button", 

    });
    
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const data={};
      formData.forEach((value, key) => {
        data[key] = value;
      });
  
      emailjs.send(
        "service_bn25gvh",
        "template_d9q528i",
        data,
        "aTU2AKHcfOn7qsKfL"
      ).then((response) => {
        console.log('Email sent successfully:', response);
        if (formRef.current) {
          formRef.current.reset();
        }
      }, (error) => {
        console.error('Email sending failed:', error);
      });
    } else {
      console.error("Form reference is null.");
    }
  }
  

  
  return (
    <div className='   space-y-6 w-full '>
      <Helmet>
    <title>Lek Ladki Yojana Maharashtra - Government Scheme</title>
    <meta name="description" content="Learn about the Lek Ladki Yojana Maharashtra. Find details on how the scheme helps girls receive up to Rs. 1,01,000 from the government." />

    </Helmet>
 <div className="relative  items-top justify-center  sm:mt-0 sm:pt-0 bg-gray-100">
    <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className="mt-8 overflow-hidden">
            <div>
                <div className="p-6 mr-2 bg-gray-100 sm:rounded-lg">
                   
                    <p className="text-normal text-lg sm:text-2xl font-medium text-gray-600 mt-6">
                     Leave Comment Here
                    </p>

                    <div className="flex items-center mt-2 text-gray-600">
                    </div>

            

                
                </div>

                <form  className="p-6 flex flex-col justify-center" ref={formRef} onSubmit={sendEmail}>
                    <div className="flex flex-col">
                        <label htmlFor="name" className="hidden ">Full Name</label>
                        <input type="name" name="name" id="name" placeholder="Full Name" className="w-100 mt-2 py-3 px-3 mb-4 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"/>
                    </div>

                    <div className="flex flex-col mt-2">
                        <label htmlFor="email" className="hidden">Email</label>
                        <input type="email" name="email" id="email" placeholder="Email" className="w-100 mt-2 py-3 px-3 mb-4 rounded-lg bg-white border border-gray-400  text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"/>
                    </div>

                    <div className="flex flex-col mt-2">
                        <label htmlFor="message" className="hidden">Comment</label>
                        <textarea name="message" id="message" placeholder="Your Message" className="w-100 mt-2 py-3 mb-4 px-3 rounded-lg bg-white  border border-gray-400  text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"></textarea>
                    </div>

                    <button type="submit" className="md:w-32 bg-indigo-500  text-white font-bold mb-4 py-3 px-6 rounded-lg mt-8 hover:bg-indigo-900 transition ease-in-out duration-300">
                       Submit
                    </button>
                </form>
            </div>
            
        </div>
    </div>
</div> 
     

    </div>
  )
}

export default Comment
