import Link from 'next/link'
import React from 'react'
import { FiAperture } from "react-icons/fi";


const navbar = () => {
  const links =[
    {label: 'Dashboard', href: '/'},
    {label: 'Issues', href: '/issues'},
  ]


  return (
    <nav className='flex gap-x-6 border-b mb-5 px-5 h-14 items-center  ' >
        <Link href="/"><FiAperture /></Link>
        <ul className='flex gap-x-6'>
          {links.map((link) => (<Link key={link.href} className='text-zincc-500 hover:text-zinc-800 transition-colors' href={link.href}>{link.label}</Link>))}
        </ul>
    </nav>
  )
}

export default navbar