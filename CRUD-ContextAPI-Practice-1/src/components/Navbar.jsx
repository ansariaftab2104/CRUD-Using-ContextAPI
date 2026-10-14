import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full bg-zinc-100 flex justify-between py-2 px-8'>
      <div className="logo">
        <h1 className='text-xl font-semibold'>Aftab</h1>
      </div>
      <nav className='flex gap-5'>
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Contect Us</a>
        <a href="#">Our Services</a>
      </nav>
      <div className="btn">
        <button className='bg-zinc-300 px-2 py-1 rounded cursor-pointer text-base font-semibold'>
            Create
        </button>
      </div>
    </div>
  )
}

export default Navbar
