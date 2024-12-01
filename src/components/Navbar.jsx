import React,{useState} from "react";


const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const toggleUserMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      }

  return (
    <div >
      <nav className="bg-white dark:text-black dark:bg-gray-300 " >

        <div className="mx-auto max-w-5xl ss:w-scrren px-2 sm:px-6  ">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                onClick={toggleUserMenu}
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>

                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <div className="h-8 w-auto  ">
                                <h1 className="font-bold text-2xl ss:text-base">MahaDBT Scholarship 2024-25</h1>

                </div> 
              </div>
              <div className="hidden  pl-20  sm:ml-6 sm:block">
                <div className="flex space-x-6 pl-20 ml-20">
                  <a href=""
                   
                    className="text-black hover:bg-gray-300 hover:text-black rounded-md px-3 py-2 text-lg font-medium dark:text-black "
                    aria-current="page"
                  >
                    Home
                  </a>
                 <a href=""
                    className="text-black hover:bg-gray-300 hover:text-black rounded-md px-3 py-2 text-lg font-medium  dark:text-black"
                  >
                    About
                  </a>
                   <a href=""
                    className="text-black hover:bg-gray-300 hover:text-black rounded-md px-3 py-2 text-lg font-medium dark:text-black"
                  >
                    Service
                  </a>
                   <a href=""
                    className="text-black hover:bg-gray-300 hover:text-black rounded-md px-3 py-2 text-lg font-medium  dark:text-black"
                  >
                    Contact
                  </a>
                </div>


              </div>



            </div>
            
          </div>
        </div>

        {!isMenuOpen && (
        <div className={`sm:hidden `} id="mobile-menu" >
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a href=""
              className="text-gray-500 hover:bg-gray-300 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              aria-current="page"
            >
              Home
            </a>
            <a href=""
              className="text-gray-500 hover:bg-gray-300 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              About
            </a>
           <a href=""
              className="text-gray-500 hover:bg-gray-300 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
             Service
            </a>
             <a href=""
              className="text-gray-500 hover:bg-gray-300 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
            Contact
            </a>
          </div>
        </div>
      )}


      </nav>
      <hr/>
    </div>
  );
};

export default Navbar;

