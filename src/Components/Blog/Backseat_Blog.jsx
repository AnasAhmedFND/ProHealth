import React from 'react'

const Backseat_Blog = () => {
    return (
        <section className=' container mx-auto relative md:top-[220px] top-[100px] -z-20 shadow-2xl rounded-xl pt-10 md:px-0 px-2 '>
            {/* mother div */}
            <div className="md:flex  items-center ">
                <div className=" md:w-1/2 md:pl-10">
                    <h2 className='font-bold text-4xl '>Don’t Let Your Health <br />
                        Take a Backseat!</h2>
                    <p className='mt-2'>Schedule an appointment with one of our experienced <br />
                        medical professionals today!</p>

                </div>
                <div className=" md:w-1/2 flex justify-center">
                    <img className='w-[60%]  ' src="/blog/blog_bg.png" alt="person_Doctor" />

                </div>

            </div>

        </section>
    )
}

export default Backseat_Blog
