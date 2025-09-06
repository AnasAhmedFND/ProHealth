import { Inter } from 'next/font/google'
import React from 'react'

const inter = Inter({
    subsets: ["latin"],
    weight: ["200", "400", "500", "700", "800"]
})

const Departments2 = () => {
    return (
        <section className='container mx-auto  pb-10 pt-16 '>
            <h2 className={`${inter.className} font-bold text-4xl text-[#274760] `}>Departments</h2>
            {/* 2nd Departments main div */}
            <div className=" mt-10 flex justify-between ">
                {/* one */}
                <div className=" w-[24%] p-4 rounded-2xl shadow-lg hover:bg-white hover:text-black bg-black text-white ">
                    <div className="flex gap-3">
                        <img className='w-[60px]' src="/home/dep2-pic.png" alt="loga" />
                        <h6 className='font-bold '>Malcolm Baldrige <br />National Quality <br />Award</h6>
                    </div>
                    <p className='mt-5 '>This award recognizes
                        healthcare organizations that
                        have demonstrated excellence
                        in leadership, strategic
                        planning, customer and
                        employee satisfaction, and
                        operational efficiency.</p>

                </div>
                {/* two */}
                <div className=" w-[24%] p-4 rounded-2xl shadow-lg bg-white hover:bg-black hover:text-white">
                    <div className="flex gap-3">
                        <img className='w-[60px]' src="/home/dep2-pic.png" alt="loga" />
                        <h6 className='font-bold '>HIMSS Davies <br />Award</h6>
                    </div>
                    <p className='mt-5 '>This award recognizes
                        healthcare organizations that
                        have used health information
                        technology to improve patient
                        outcomes and reduce costs.</p>

                </div>

                <div className=" w-[24%] p-4 rounded-2xl shadow-lg bg-white hover:bg-black hover:text-white">
                    <div className="flex gap-3">
                        <img className='w-[60px]' src="/home/dep2-pic.png" alt="loga" />
                        <h6 className='font-bold '>Healthgrades <br />National’s Best <br />Hospital</h6>
                    </div>
                    <p className='mt-5 '>This recognition is given to
                        hospitals that have achieved
                        high ratings for clinical quality
                        and patient safety across
                        multiple specialties and
                        procedures.</p>

                </div>

                <div className=" w-[24%] p-4 rounded-2xl shadow-lg bg-white hover:bg-black hover:text-white">
                    <div className="flex gap-3">
                        <img className='w-[60px]' src="/home/dep2-pic.png" alt="loga" />
                        <h6 className='font-bold '>Joint<br />Commission Gold<br />Seal of Approval </h6>
                    </div>
                    <p className='mt-5 '>This recognition is given to
                        hospitals that have met
                        rigorous standards for patient
                        safety and quality of care.</p>

                </div>


            </div>
        </section>
    )
}

export default Departments2
