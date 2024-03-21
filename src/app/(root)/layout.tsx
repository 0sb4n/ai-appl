import MobileBar from '@/components/MobileBar'
import Sidebar from '@/components/Sidebar'
import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
  <main className=' w-full h-screen flex lg:flex-row flex-col '>
    <Sidebar/>
    <MobileBar/>
    {children}
  </main>
  )
}

export default layout