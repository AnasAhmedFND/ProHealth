import React from 'react'

const Details = () => {
    return (
        <section className=' container mx-auto md:px-0 px-2 '>
            <div className="md:flex md:flex-row md:items-center flex flex-col-reverse ">
                <div className=" md:w-1/2">
                    <h2 className='font-bold text-4xl '>Pediatric <br /> Department</h2>
                    <p className='mt-2'> This department specializes in the care of infants, <br />
                        children, adolescents, and provides a range of <br />
                        services including preventive care, developmental <br />
                        screenings, and treatment of childhood illnesses <br />
                        and conditions.</p>
                </div>

                <div className=" md:w-1/2">
                    <img src="/department/department_hero.png" alt="doctor" />
                </div>
            </div>

        </section>
    )
}

export default Details
