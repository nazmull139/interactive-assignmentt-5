import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div className='w-full bg-white p-5 border-b-2 border-b-gray-400 '>
      <p className='text-red-600 m-auto w-[70%] hover:text-black font-bold text-2xl'><Link to={"/"} >CONTACT APP</Link></p>
    </div>
  )
}

export default Navbar