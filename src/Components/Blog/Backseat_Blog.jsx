import React from 'react'

const Backseat_Blog = () => {
    return (
        <section className=' container mx-auto relative top-[220px] -z-20 shadow-2xl rounded-xl pt-10 '>
            {/* mother div */}
            <div className="flex  items-center ">
                <div className=" w-1/2 pl-10">
                    <h2 className='font-bold text-4xl '>Don’t Let Your Health <br />
                        Take a Backseat!</h2>
                    <p className='mt-2'>Schedule an appointment with one of our experienced <br />
                        medical professionals today!</p>

                </div>
                <div className=" w-1/2 flex justify-center">
                    <img className='w-[60%]  ' src="/blog/blog_bg.png" alt="person_Doctor" />

                </div>

            </div>

        </section>
    )
}

export default Backseat_Blog
