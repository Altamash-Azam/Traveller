"use client"
import Link from 'next/link'
import React from 'react'
import { signOut, useSession } from 'next-auth/react'

const Navbar = () => {
  const {data: session, status} = useSession();
  return (
    <div className='relative z-10 text-white p-4 rounded-lg m-7'>
      <div className='flex flex-row justify-between'>
        <div className='text-3xl'>Traveller</div>
        <div className='flex flex-row gap-10'>
          <div>Home</div>
          <div>About us</div>
          <div>our Services</div>
          <div>destinations</div>
          {session ? <div><button onClick={() => signOut({ callbackUrl: '/sign-in' })}>Sign out</button></div> : <div><Link href="/sign-in">Log In</Link></div>}
        </div>
      </div>
    </div>
  )
}

export default Navbar
