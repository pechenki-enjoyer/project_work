import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className='flex justify-between p-5 max-w-7xl mx-auto'>
        <div className='flex items-center  space-x-5'>
            <Link href='/'>
                <img className="w-44 h-20 object-contain cursor-pointer" src="https://imgs.search.brave.com/CFUv9HC3y5a0GHADGAUyabA2tSV09W5076_xTVZ6ivQ/rs:fit:375:360:1/g:ce/aHR0cDovL3d3dy5z/a2lkb21waGEub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE4/LzA1L1lvdXItTG9n/by5wbmc" alt="logo" />
            </Link>
            <div className=" hidden md:inline-flex items-center space-x-5">
                <h3>About</h3>
                <h3>Contact</h3>
                <h3 className="text-white bg-[#328ae0] px-4 py-1 rounded-full">Follow</h3>
            </div>
        </div>
        
        <div className='flex items-center space-x-5 text-[#328ae0]'>
          <h3>Sign in</h3>
          <h3 className='py-1 rounded-full border px-4 border-[#328ae0]'>Get started</h3>
        </div>

    </header>
  )
}

export default Header