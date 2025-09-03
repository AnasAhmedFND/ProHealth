import React from 'react'

const Choose = () => {
    return (
        <section className='container mx-auto py-10'>
            {/* choose mother div */}
            <div className="flex justify-between">
                {/* left */}
                <div className="w-[38%]  ">
                    <img src="/about/abouts_main.png" alt="doctor" />
                </div>

                {/* right */}
                <div className="w-[59%]  p-2 text-[#274760] ">
                    <h2 className='font-bold  text-4xl'>Why Choose Us</h2>
                    <div className="flex flex-wrap mt-4 justify-between gap-2 ">
                        <div className=" w-[49%] py-3 ">
                            <img className='border rounded-full w-[40px] h-[40px] ' src="home/dep2-pic.png" alt="" />
                            <h4 className='font-bold text-xl mt-2'>Experienced Medical  <br />
                                Professionals</h4>
                            <p className='mt-2'><small> Our team includes experienced doctors, <br />
                                nurses, and other healthcare professionals <br />
                                who are dedicated to providing the best <br />
                                possible care to our patients.</small> </p>
                        </div>

                         <div className=" w-[49%] py-3 ">
                            <img className='border rounded-full w-[40px] h-[40px] ' src="home/dep2-pic.png" alt="" />
                            <h4 className='font-bold text-xl mt-2'>Experienced Medical  <br />
                                Professionals</h4>
                            <p className='mt-2'><small> Our team includes experienced doctors, <br />
                                nurses, and other healthcare professionals <br />
                                who are dedicated to providing the best <br />
                                possible care to our patients.</small> </p>
                        </div>

                         <div className=" w-[49%] py-3 ">
                            <img className='border rounded-full w-[40px] h-[40px] ' src="home/dep2-pic.png" alt="" />
                            <h4 className='font-bold text-xl mt-2'>Experienced Medical  <br />
                                Professionals</h4>
                            <p className='mt-2'><small> Our team includes experienced doctors, <br />
                                nurses, and other healthcare professionals <br />
                                who are dedicated to providing the best <br />
                                possible care to our patients.</small> </p>
                        </div>

                         <div className=" w-[49%] py-3 ">
                            <img className='border rounded-full w-[40px] h-[40px] ' src="home/dep2-pic.png" alt="" />
                            <h4 className='font-bold text-xl mt-2'>Experienced Medical  <br />
                                Professionals</h4>
                            <p className='mt-2'><small> Our team includes experienced doctors, <br />
                                nurses, and other healthcare professionals <br />
                                who are dedicated to providing the best <br />
                                possible care to our patients.</small> </p>
                        </div>
                    </div>



                </div>
            </div>

        </section>
    )
}

export default Choose
