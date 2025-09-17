import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { MdLocalPhone } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <section className='  relative ' >
      <div className="  ">                
        <img className='md:h-[600px] h-[1250px] w-full  ' src="/footer/footer.png" alt="digsin" />
        {/* bottom */}
        <div className=" bg-[#307BC4] py-4  md:px-0 px-2  ">
          <div className="container mx-auto flex justify-between">
            <p className='flex items-center gap-2'><small>Follow Us</small>  <TiSocialLinkedinCircular /> <TiSocialFacebookCircular /> <FaInstagram /></p>

            <p> <small>Copyright © 2024  All rights reserved.</small> </p>

          </div>

        </div>

      </div>
      {/* footer text mother div */}
      <div className="flex justify-center items-center  ">
      <div className="container mx-auto  md:flex justify-between absolute top-[300px]  md:px-0 px-2 md:mt-0 mt-36 ">
        {/* one */}
        <div className="md:w-[30%] md:mt-0 mt-4  ">
          <img className='w-[180px] h-[70px]  px-4 py-2 rounded-2xl bg-white shadow-2xl' src="/health.png" alt="logo" />
          <a href="https://www.popular-hospital.com/location-map">
            <p className='text-black  flex gap-2 items-center  mt-8'><span className='border p-1 text-xl rounded-full bg-blue-500 text-white '> <CiLocationOn /> </span> 123 Anywhere St., Any City 12345</p>
          </a>
          <p className='text-black  flex gap-2 items-center mt-2'><span className='border p-1 text-xl rounded-full bg-blue-500 text-white '><MdLocalPhone /></span>  123-456-7890 </p>
          <p className='text-black  flex gap-2 items-center mt-2 '><span className='border p-1 text-xl rounded-full bg-blue-500 text-white '>  <MdOutlineMailOutline /></span>  hellocallcenter@gmail.com</p>

        </div>

        {/* two */}
        <div className="md:w-[15%] md:mt-0 mt-4  flex flex-col gap-3 ">
          <p className='md:font-mono font-bold md:mt-0 mt-2'>About Us</p>
          <p>Departments</p>
          <p>Doctors</p>
          <p>Timetable</p>
          <p>Appointment</p>
          <p>Tesstimonials</p>

        </div>

        {/* three */}
        <div className="md:w-[15%] md:mt-0 mt-4  flex flex-col gap-3">
          <p className='md:font-mono font-bold md:mt-0 mt-2'>Blog</p>
          <p>Contact Us</p>
          <p>FAQs</p>
          <p>Privacy Policy</p>
          <p>Trrms and Conditions</p>

        </div>

        {/* four */}
        <div className="md:w-[30%] md:mt-0 mt-4  ">
          <h2 className='font-bold text-2xl'>Be Our Subscribers</h2>
          <p className='mt-2'><small>To get the latesst news about health from our <br /> Experts </small> </p>
          <div className="flex border items-center justify-between  pl-2  mt-2 rounded-full  ">
            <p><small>Examople@email.com </small> </p>
            <button className=' flex gap-2 items-center border-2 rounded-full px-2 py-2 bg-linear-60 from-[#307BC4] to-[#274760] text-white'>Submit <FaArrowRightLong /></button>
          </div>

        </div>


      </div>

      </div>

    </section>
  )
}

export default Footer
