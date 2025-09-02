import { Inter } from 'next/font/google'
import React from 'react'
const inter = Inter({
    subsets:['latin'],
    weight:['500','700']
})
const Find_Backseat = () => {
    return (
        <section className='container mx-auto shadow-2xl  py-24 pb-56 bg-[#dbe2e8bd] px-8 relative top-[220px] -z-20'>
            <h3 className={`${inter.className} text-4xl font-bold text-white `}>Don’t Let Your Health <br />
                Take a Backseat!</h3>

            <p className=' text-white'>Schedule an appointment with one of our experienced <br />
                medical professionals today!</p>

        </section>
    )
}

export default Find_Backseat
