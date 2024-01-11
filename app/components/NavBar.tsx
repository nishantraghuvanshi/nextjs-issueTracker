'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { FiAperture } from "react-icons/fi";
import classNames from 'classnames';


const navbar = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const currentPath= usePathname();
  console.log(currentPath);


  const links =[
    {label: 'Dashboard', href: '/'},
    {label: 'Issues', href: '/issues'},
  ]


  return (
    <nav className='flex gap-x-6 border-b mb-5 px-5 h-14 items-center  ' >
        <Link href="/"><FiAperture /></Link>
        <ul className='flex gap-x-6'>
          {links.map((link) => (<Link key={link.href} className={
            classNames({
              'text-zinc-900 bg-blue-500 rounded-xl': currentPath === link.href,
              'text-zinc-500': currentPath !== link.href,
              'hover:text-zinc-800 transition-colors duration-200 p-1': true
            })
          } href={link.href}>{link.label}</Link>))}
        </ul>
    </nav>
  )
}

export default navbar