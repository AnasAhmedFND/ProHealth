import { Inter } from 'next/font/google'
import React from 'react'
const inter= Inter({
    subsets:["latin"],
    weight:["200","500", "700"]
})

const Backseat = () => {
    return (
        <section className='container mx-auto  md:py-10 md:pt-0 pt-2 relative  md:px-0 px-2 '>
            
            <img className='w-full md:h-[400px] h-[450px] ' src="/home/backseat.png" alt="bgacgroun-pic" />

           
            {/* text & pic */}
            <div className="md:flex  w-full px-4 items-center md:absolute absolute top-10  md:-top-20 ">
                <div className=" md:w-1/2 md:ml-10">
                    <h4 className={`${inter.className} font-bold md:text-6xl md:tracking-normal tracking-widest text-2xl md:text-white`}>Don't Let Health <br />Take a Backseat!</h4>
                    <p className='mt-5'>Schedule an appointment with one of our <br />
                        experienced medical professionals today!</p>
                </div>

                <div className=" md:w-1/2 flex justify-end">
                <img className='w-[80%] ' src="/home/backseat_person.png" alt="person" />

                </div>

            </div>

        </section>
    )
}

export default Backseat
