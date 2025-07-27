import Header from '@/components/dashboard/Header'
import Sidebar from '@/components/dashboard/Sidebar'
import React from 'react'

const Page = () => {
  return (
    <div className='min-w[95vw] h-[150vh]  text-white bg-white relative overflow-hidden'>
      <Sidebar/>
      <Header/>
    </div>
  )
}

export default Page
