import React from "react"
import Navbar from "./navbar"

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='w-[85%] mx-auto'>
      <Navbar />
      {children}
    </div>
  )
}

export default Container
