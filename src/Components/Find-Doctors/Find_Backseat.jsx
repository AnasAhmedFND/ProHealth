import { Inter } from 'next/font/google'
import React from 'react'
const inter = Inter({
    subsets:['latin'],
    weight:['500','700']
})
const Find_Backseat = () => {
    return (
        <section className='container mx-auto shadow-2xl  py-24 pb-56  pl-8 relative top-[220px] -z-20 text-[#cee0f3]' style={{backgroundImage: "url('/find/find_bg2.png') " }} >
            <h3 className={`${inter.className} text-4xl font-bold  `}>Don’t Let Your Health <br />
                Take a Backseat!</h3>

            <p className=''>Schedule an appointment with one of our experienced <br />
                medical professionals today!</p>

        </section>
    )
}

export default Find_Backseat
