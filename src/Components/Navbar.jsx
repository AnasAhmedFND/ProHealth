"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { MdMenu } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { useRouter } from 'next/navigation';
import { RxCross2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const router = useRouter()

  const handleChange = (e) => {
    const path = e.target.value
    if (path) {
      router.push(path) // select করলে সেই page এ যাবে
    }

  }
  // menu handele function.///////////////
  const [menu, setMenu] = useState(false);
  const handeleMenu = () => {
    if (window.innerWidth < 768) {
      setMenu(!menu)
    }
  }

  return (
    
    <section className=' py-5 '>
      {/* menu handele */}
        <div className="md:hidden flex justify-between items-center border bg-yellow-300 px-2 ">
          <p className='font-bold text-xl'>Menu...</p>
          <p onClick={handeleMenu} className=' font-bold text-2xl '>{menu === true ? <RxCross2 className='cursor-pointer' /> : <GiHamburgerMenu className='cursor-pointer' /> } </p>
        </div>

        {/* main navber */}
      <div className={`container mx-auto md:text-center md:flex justify-between md:px-0 px-2 text-white md:text-black ${ menu ? " absolute top-[50px] left-0  bg-black/80 w-full duration-1000 ease-in-out z-40 h-screen  " : "md:static  absolute  -left-[800px] " }`}>      
    

        <div className=" md:w-[20%] ">
          <img className='w-[150px] h-[50px] ' src="/health.png" alt="health" />

        </div>
        <ul className='md:flex md:flex-row  justify-around md:w-[60%] flex flex-col gap-4   '>
          <li className=''><Link href={'/'}> Home </Link> </li>
          <li className=''><Link href={'/about_us'}>About</Link>  </li>
          <li className=''><Link href={'/find_doctor'}>Find Doctor </Link> </li>
          <li className=''><Link href={'/blog'}>Blog </Link> </li>

          <li className=' '>
            <select className=' w-[70px] items-center outline-none  '
              name="pages"
              id="pages"
              onChange={handleChange}>

              <option value="Page">Page</option>
              <option className='cursor-pointer text-black' value="/details">Details </option>
              <option className='cursor-pointer text-black ' value="/gallery"> Gallery</option>
            </select>

          </li>
          {/* <li className=''> </li> */}
          <li className=''><Link href={'/contact'} >Contact</Link> </li>
        </ul>
        <div className="  text-2xl w-[20%] hidden  lg:block  ">
          <p className='flex justify-end  items-center gap-5'><FiSearch /> <MdMenu /></p>
          

        </div>

      </div>
    </section>
  )
}

export default Navbar
