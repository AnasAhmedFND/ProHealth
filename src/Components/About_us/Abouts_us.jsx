import React from 'react'

const Abouts_us = () => {
    return (
        <section className='  pt-20  relative -z-20 -top-[90px]  ' style={{ backgroundImage: "url('/about/bg.png') " }} >
            <div className="container mx-auto flex items-center mt-5 ">
                <div className=" w-1/2 mx-auto relative">
                    <img className='w-[60%] h-[] ' src="/about/abouts_main.png" alt="pepol" />
                    <img className='absolute bottom-0 w-[45%] right-5 rounded-t-xl ' src="/about/abouts_main2.png" alt="pepol" />

                </div>
                <div className=" w-1/2  text-end">
                    <h2 className='font-bold text-4xl'>Welcome to <br />
                        ProHealth Medical & <br />
                        Healthcare Center</h2>

                    <p className='mt-4'>Your Partner in Health and Wellness</p>

                </div>



            </div>

        </section>
    )
}

export default Abouts_us
