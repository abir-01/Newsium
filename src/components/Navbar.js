import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/2644746.png'

const Navbar = () => {
    const [country, setcountry] = useState('in/')

    return (
        <>

            <header className="bg-neutral-900 text-gray-600 body-font ">
                <div className="container mx-auto flex flex-wrap p-5  flex-col md:flex-row items-center justify-center">
                    <Link className="flex title-font font-medium items-center text-gray-100 mb-4 md:mb-0" to='/'>

                        <img src={image} alt="" className='object-cover' style={{
                            maxHeight: '10vh'
                        }} />
                        <span className="ml-3 text-xl">Newsium</span>
                    </Link>
                    </div>
                <div className="container mx-auto flex flex-wrap p-5  flex-col md:flex-row items-center justify-center">
                    
                    <nav className=" xs: md:ml-4 md:py-1 md:pl-4 md:border-r md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                        <Link className="mr-5 text-gray-100 hover:text-gray-400 cursor-pointer" to={`${country}Health/`}>Health</Link>
                        <Link className="mr-5 text-gray-100 hover:text-gray-400 cursor-pointer" to={`${country}Sports/`}>Sports</Link>
                        <Link className="mr-5 text-gray-100 hover:text-gray-400 cursor-pointer" to={`${country}Science/`}>Science</Link>
                        <Link className="mr-5 text-gray-100 hover:text-gray-400 cursor-pointer" to={`${country}Business/`}>Business</Link>
                        <Link className="mr-5 text-gray-100 hover:text-gray-400 cursor-pointer" to={`${country}Technology/`}>Technology</Link>
                        <Link className="mr-5 text-gray-100 hover:text-gray-400 cursor-pointer" to={`${country}General/`}>General</Link>
                        <Link className="mr-5 text-gray-100 hover:text-gray-400 cursor-pointer" to={`${country}Entertainment/`}>Entertainment</Link>
                    </nav>




                    
                    <div className="flex justify-center  xs:my-6 md:my-0 mx-6 ">
                        <div>

                            <div className="relative" data-te-dropdown-ref>
                                <button
                                    className="flex justify-center align-center items-center   whitespace-nowrap rounded bg-blue-800 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none"
                                    type="button"
                                    id="dropdownMenuButton1"
                                    data-te-dropdown-toggle-ref
                                    aria-expanded="false"
                                    data-te-ripple-init
                                    data-te-ripple-color="light">
                                    Select Country
                                    <span className="ml-2 w-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="h-5 w-5">
                                            <path
                                                fillRule="evenodd"
                                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                clipRule="evenodd" />
                                        </svg>
                                    </span>
                                </button>
                                <ul
                                    className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                                    aria-labelledby="dropdownMenuButton1"
                                    data-te-dropdown-menu-ref>
                                    <li>
                                        {/* <base to="/" /> */}
                                        <Link
                                            className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                            to="in/" onClick={() => { setcountry('in/') }}
                                            data-te-dropdown-item-ref
                                        >IN</Link
                                        >
                                    </li>
                                    <li>
                                        <Link
                                            className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                            to="au/" onClick={() => { setcountry('au/') }}
                                            data-te-dropdown-item-ref
                                        >AU</Link
                                        >
                                    </li>
                                    <li>
                                        <Link
                                            className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                            to="nz/" onClick={() => { setcountry('nz/') }}
                                            data-te-dropdown-item-ref
                                        >NZ</Link
                                        >
                                    </li>
                                    <li>
                                        <Link
                                            className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                            to="ru/" onClick={() => { setcountry('ru/') }}
                                            data-te-dropdown-item-ref
                                        >RU</Link
                                        >
                                    </li>
                                    <li>
                                        <Link
                                            className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                            to="us/" onClick={() => { setcountry('us/') }}
                                            data-te-dropdown-item-ref
                                        >US</Link
                                        >
                                    </li>
                                    


                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


            </header>
        </>


    )
}

export default Navbar;