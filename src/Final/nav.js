import {Link} from "react-router-dom";

function Nav() {
return (
      <div> 
        <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
            <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                    <a>
                    <span className="sr-only">Workflow</span>
                    <img alt="Workflow" className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" />
                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                    <button type=" button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick= {() => document.getElementById("toggleNav").classList.toggle("hidden")}
                    
                    aria-expanded="false">
                        <span className="sr-only">Open main menu </span>       <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    </div>
                </div>
                </div>
                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                <Link to="/" className="font-medium text-gray-500 hover:text-gray-900">Beranda</Link>

                <Link to="/lowongan" className="font-medium text-gray-500 hover:text-gray-900">Cari Lowongan</Link>

                <Link to="/" className="font-medium text-gray-500 hover:text-gray-900">Profil perusahaan</Link>

                <Link to="/" className="font-medium text-gray-500 hover:text-gray-900">Tips Karrier</Link>

                
                </div>
            </nav>
            </div>
            
            
            <div className=" absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">

                    <div className="hidden rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden" id="toggleNav">

                        <div className="px-5 pt-4 flex items-center justify-between">
                        <div>
                            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
                        </div>
                        <div className="-mr-2 ">
                            <button type="button" className=" bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" onClick={() => document.getElementById("toggleNav").classList.toggle("hidden")}>
                            <span className=" sr-only">Close main menu </span>  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            </button>
                        </div>
                        </div >
                        <div className="px-2 pt-2 pb-3 space-y-1">
                        <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Home</Link>

                        <Link to="/lowongan" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Cari Lowongan</Link>

                        <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Profile Perusahaan</Link>

                        <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Tips Karrier</Link>
                        </div>
                       
                    </div>
                    </div> 
        </div>
    ) 
 }
 export default Nav; 