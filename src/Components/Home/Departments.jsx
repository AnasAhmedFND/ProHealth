import React from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({
    subsets: ["latin"],
    weight: ["200", "500", "600", "700", "800"]
})

const Departments = () => {
  return (
    <section className='container mx-auto  relative pb-[150px] '>
        <div className=" text-center h-screen bg-cover bg-center  " style={{backgroundImage:
            "url('/home/div-dpt.png' )", height:'300px'
        }}>
            <h2 className={`${inter.className} text-4xl font-bold relative top-14 text-[#274760] `}  >Departments</h2>
        </div>
        {/* Departments card items */}
        <div className=" flex justify-around absolute top-[150px]  ">
            {/* card-1 */}
            <div className=" px-4 py-5 rounded-2xl shadow-lg w-1/6 bg-white flex flex-col justify-center items-center ">
                <img className='mt-6' src="/home/dpt1.png" alt="" />
                <h6 className='mt-4'>Emergency <br /> Department</h6>
                
            </div>
            {/* card-2 */}
             <div className=" px-4 py-5 rounded-2xl shadow-lg w-1/6 bg-white flex flex-col justify-center items-center ">
                <img className='mt-6' src="/home/dpt2.png" alt="" />
                <h6 className='mt-4'>Pediatric <br /> Department</h6>
                
            </div>
            {/* card-3 */}
             <div className=" px-4 py-5 rounded-2xl shadow-lg w-1/6 bg-white flex flex-col justify-center items-center ">
                <img className='mt-6' src="/home/dpt3.png" alt="" />
                <h6 className='mt-4'>Gynecology <br /> Department</h6>
                
            </div>
            {/* card-4 */}
             <div className=" px-4 py-5 rounded-2xl shadow-lg w-1/6 bg-white flex flex-col justify-center items-center ">
                <img className='mt-6' src="/home/dpt4.png" alt="" />
                <h6 className='mt-4'>Cardiology <br /> Department</h6>
                
            </div>
            {/* card-5 */}
             <div className=" px-4 py-5 rounded-2xl shadow-lg w-1/6 bg-white flex flex-col justify-center items-center ">
                <img className='mt-6' src="/home/dpt5.jpg" alt="" />
                <h6 className='mt-4'>Neurology <br /> Department</h6>
                
            </div>

        </div>

    </section>
  )
}

export default Departments
