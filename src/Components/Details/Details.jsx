import React from 'react'

const Details = () => {
    return (
        <section className=' container mx-auto '>
            <div className="flex items-center ">
                <div className=" w-1/2">
                    <h2 className='font-bold text-4xl '>Pediatric <br /> Department</h2>
                    <p className='mt-2'> This department specializes in the care of infants, <br />
                        children, adolescents, and provides a range of <br />
                        services including preventive care, developmental <br />
                        screenings, and treatment of childhood illnesses <br />
                        and conditions.</p>
                </div>

                <div className=" w-1/2">
                    <img src="/department/department_hero.png" alt="doctor" />
                </div>
            </div>

        </section>
    )
}

export default Details
