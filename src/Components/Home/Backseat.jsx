import { Inter } from 'next/font/google'
import React from 'react'
const inter= Inter({
    subsets:["latin"],
    weight:["200","500", "700"]
})

const Backseat = () => {
    return (
        <section className='container mx-auto  py-10 relative'>
            
            <img className='' src="/home/backseat.png" alt="bgacgroun-pic" />

           
            {/* text & pic */}
            <div className="flex  w-full px-4 items-center absolute -top-9 ">
                <div className=" w-1/2 ml-5">
                    <h4 className={`${inter.className} font-bold text-4xl text-white`}>Don't Let Health <br />Take a Backseat!</h4>
                    <p className='mt-5'>Schedule an appointment with one of our <br />
                        experienced medical professionals today!</p>
                </div>

                <div className=" w-1/2 flex justify-end">
                <img className='w-[80%] ' src="/home/backseat_person.png" alt="person" />

                </div>

            </div>

        </section>
    )
}

export default Backseat
