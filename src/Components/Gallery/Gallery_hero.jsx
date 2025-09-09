import { Inter } from 'next/font/google'
import React from 'react'

const inter = Inter({
    subsets: ["latin"],
    weight: ["500", "700"]
})

const Gallery_hero = () => {
    return (
        <section className='container mx-auto '>
            {/* main Activities div */}
            <div className="">

                <div className="flex justify-between">
                    <img className='w-[67%]  ' src="/about/op4.png" alt="oparetion_team" />
                    <img className='w-[32%] ' src="/about/op5.png" alt="oparetion_team" />

                </div>

                <div className="flex justify-between mt-2 ">
                    <img className='w-[32%] ' src="/about/op2.png" alt="oparetions_word" />
                    <img className='w-[34%] ' src="/about/op3.png" alt="oparetions word" />
                    <img className='w-[32%] ' src="/about/op2.png" alt="oparetions_word" />

                </div>




                {/* bottom */}
                 <div className="flex justify-between mt-2">
                    <img className='w-[67%]  ' src="/about/op4.png" alt="oparetion_team" />
                    <img className='w-[32%] ' src="/about/op5.png" alt="oparetion_team" />

                </div>

            </div>

        </section>
    )
}

export default Gallery_hero
