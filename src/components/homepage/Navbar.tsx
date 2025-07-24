"use client"
import Link from 'next/link'
import React from 'react'
import { signOut, useSession } from 'next-auth/react'

const Navbar = () => {
  const {data: session, status} = useSession();
  return (
    <div className='relative z-10 text-white px-16 py-10 rounded-lg m-7'>
      <div className='flex flex-row justify-between'>
        <div className='text-3xl'>traveller</div>
        <div className='flex flex-row gap-10'>
          <div>Home</div>
          <div><a href="#about">About us</a></div>
          <div>Features</div>
          <div>Destinations</div>
          {session ? <div><button className='border-white border-2 rounded-full px-4 py-1' onClick={() => signOut({ callbackUrl: '/sign-in' })}>Sign out</button></div> : <div><Link className='border-white border-2 rounded-full px-4 py-1' href="/sign-in">Log In</Link></div>}
        </div>
      </div>
    </div>
  )
}

export default Navbar
