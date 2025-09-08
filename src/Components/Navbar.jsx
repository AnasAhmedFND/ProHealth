"use client"
import React from 'react'
import Link from 'next/link'
import { MdMenu } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter()

  const handleChange = (e) => {
    const path = e.target.value
    if (path) {
      router.push(path) // select করলে সেই page এ যাবে
    }

  }

  return (
    <section className=' py-5  '>
      <div className=" container mx-auto text-center flex justify-between items-center ">
        <div className=" w-[20%] ">
          <img className='w-[150px] h-[50px] ' src="/health.png" alt="health" />

        </div>
        <ul className='flex  justify-around w-[60%]   '>
          <li className=''><Link href={'/'}>Home </Link> </li>
          <li className=''><Link href={'/about_us'}>About</Link>  </li>
          <li className=''><Link href={'/find_doctor'}>Find Doctor </Link> </li>
          <li className=''><Link href={'/blog'}>Blog </Link> </li>

          <li className=' '>
            <select className='w-[60px] items-center outline-none '
             name="pages" 
             id="pages" 
             onChange={handleChange}>

              <option value="Page">Page</option>
              <option className='cursor-pointer ' value="/details">Details </option>
              <option value="ditails">Department Details</option>
            </select>

          </li>
          {/* <li className=''> </li> */}
          <li className=''><Link href={'/contact'} >Contact</Link> </li>
        </ul>
        <div className="flex gap-5 text-2xl w-[20%]  justify-end ">
          <p><FiSearch /></p>
          <p><MdMenu /></p>

        </div>

      </div>
    </section>
  )
}

export default Navbar
