import Backseat_details from '@/Components/Details/Backseat_details'
import Details from '@/Components/Details/Details'
import Related from '@/Components/Details/Related'
import Treatments from '@/Components/Details/Treatments'
import Appointment from '@/Components/Home/Appointment'
import React from 'react'

const page = () => {
  return (
    <>
    <Details/>
    <Treatments/>
    <Related/>
    <Appointment/>
    <Backseat_details/>
      
    </>
  )
}

export default page
