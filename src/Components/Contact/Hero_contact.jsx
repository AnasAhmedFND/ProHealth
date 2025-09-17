import { Knewave } from 'next/font/google'
import React from 'react'
const knewave = Knewave({
    subsets:["latin"],
    weight:["400"]
})
const Hero_contact = () => {
    return (
        <section className='  pt-5 relative -z-20 -top-[90px]' style={{backgroundImage: "url('/about/bg.png') " }} >
            {/* contact_hero mother div */}
            <div className="container mx-auto md:flex justify-between  mt-[100px] items-center md:px-0 px-2 ">
                {/* left */}
                <div className=" md:w-1/2 ">
                    <h2 className={`${knewave.className} font-bold text-4xl text-[#274760]`}>Contact Us</h2>
                    <p className='mt-2'>Kindly reach us to get the fastest response and treatment</p>
                </div>

                {/* right */}
                <div className=" md:w-1/2 ">
                    <img src="/contact/contact_hero.png" alt="doctor_person" />
                </div>

            </div>

        </section>
    )
}

export default Hero_contact
