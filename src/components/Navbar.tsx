import React from 'react'

const Navbar = () => {
  return (
    <div className='relative z-10 text-white p-4 rounded-lg m-7'>
      <div className='flex flex-row justify-between'>
        <div className='text-3xl'>Traveller</div>
        <div className='flex flex-row gap-10'>
          <div>Home</div>
          <div>About us</div>
          <div>our Services</div>
          <div>travel packages</div>
          <div>destinations</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
