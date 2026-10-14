import React from 'react'
import { useContext } from 'react'
import { MyStore } from '../context/UserContext'

const Navbar = () => {
    const {setToggle, toggle} = useContext(MyStore)
  return (
    <div className='w-full bg-zinc-100 flex justify-between py-2 px-8'>
      <div className="logo">
        <h1 className='text-xl font-semibold'>Aftab</h1>
      </div>
      <nav className='gap-5 hidden md:flex'>
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Contect Us</a>
        <a href="#">Our Services</a>
      </nav>
      <div className="btn">
        <button onClick={()=>setToggle((prev)=>!prev)} className='bg-zinc-300 px-2 py-1 rounded cursor-pointer text-base font-semibold'>
            {toggle ? "Create" : "Close"}
        </button>
      </div>
    </div>
  )
}

export default Navbar
