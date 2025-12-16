import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className='h-14 flex justify-between items-center'>
      <Link href={'/'} className='font-bold text-lg tracking-tight'>TaskFlow</Link>
      <Link href={'/login'}>
        <Button>Login</Button>
      </Link>
    </header>
  )
}

export default Navbar
