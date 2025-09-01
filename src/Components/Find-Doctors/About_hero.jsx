import { Inter } from 'next/font/google'
import React from 'react'
const inter = Inter({
  subsets:['latin'],
  weight:['500','700',]
})
const About_hero = () => {
  return (
    <section className='border-t relative -top-[91px] -z-20' style={{ backgroundImage: "url('/about/bg.png')" }}>
      {/* find-Doctor main div  */}
      <div className="flex  container mx-auto items-center mt-10 pt-28 ">
        {/* left */}
        <div className="w-1/2  ">
          <h2 className={`${inter.className} font-bold text-4xl text-[#274760]  `}>Introduce You to <br />Our Experts</h2>
          <p className='mt-2'>The list of certified doctors with years of <br />
            professional experiences</p>

        </div>

        {/* right */}
        <div className="w-1/2  ">
          <img className='' src="/about/find_hero.png" alt="" />
        </div>
      </div>

    </section>
  )
}

export default About_hero
