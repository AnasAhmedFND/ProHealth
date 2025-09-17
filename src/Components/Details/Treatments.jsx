import React from 'react'

const Treatments = () => {
    return (
        <section className=' container mx-auto md:px-0 px-2 '>
            <p className='text-blue-400 md:mt-0 mt-4'>MORE TYPE OF</p>
            <h4 className='font-bold text-4xl text-[#274760] mt-2.5 '>Treatments</h4>

            {/* mother div card's */}
            <div className=" md:flex justify-around bg-linear-60 from-[#ADDEE8] to-[#4494E6] py-10 rounded-2xl mt-10">


                <div className=" md:w-[22%]   text-center flex flex-col justify-center text-white ">
                    <div className="flex  justify-center">
                        <img className='w-[60px] h-[60px] ' src="/department/tr (1).png" alt="treatments_icon" />

                    </div>
                    <h4 className='mt-2 font-bold '> Treatment of chronic <br />
                        conditions</h4>
                    <p className='mt-2 '>The Pediatric Department <br />
                        provides vaccinations to help <br />
                        protect children from a range <br />
                        of illnesses and diseases, <br />
                        including measles.</p>
                </div>



                <div className=" md:w-[22%]   text-center flex flex-col justify-center text-white ">
                    <div className="flex  justify-center">
                        <img className='w-[60px] h-[60px] ' src="/department/tr (2).png" alt="treatments_icon" />

                    </div>
                    <h4 className='mt-2 font-bold '>Developmental <br />screenings </h4>
                    <p className='mt-2 '>The Pediatric Department <br />
                        provides vaccinations to help <br />
                        protect children from a range <br />
                        of illnesses and diseases, <br />
                        including measles.</p>
                </div>


                <div className=" md:w-[22%]   text-center flex flex-col justify-center text-white ">
                    <div className="flex  justify-center">
                        <img className='w-[60px] h-[60px] ' src="/department/tr (3).png" alt="treatments_icon" />

                    </div>
                    <h4 className='mt-2 font-bold '>Management of <br />
                        acute illnesses</h4>
                    <p className='mt-2 '>The Pediatric Department <br />
                        provides vaccinations to help <br />
                        protect children from a range <br />
                        of illnesses and diseases, <br />
                        including measles.</p>
                </div>

                <div className=" md:w-[22%]   text-center flex flex-col justify-center text-white ">
                    <div className="flex  justify-center">
                        <img className='w-[60px] h-[60px] ' src="/department/tr (4).png" alt="treatments_icon" />

                    </div>
                    <h4 className='mt-2 font-bold '> Vaccinations <br />
                        Department</h4>
                    <p className='mt-2 '>The Pediatric Department <br />
                        provides vaccinations to help <br />
                        protect children from a range <br />
                        of illnesses and diseases, <br />
                        including measles.</p>
                </div>

            </div>


        </section>
    )
}

export default Treatments
