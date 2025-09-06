import About_services from '@/Components/About_us/About_services'
import Abouts_us from '@/Components/About_us/Abouts_us'
import Activities from '@/Components/About_us/Activities'
import Choose from '@/Components/About_us/Choose'
import Expert from '@/Components/About_us/Expert'
import React from 'react'

const page = () => {

  return (
    < >
      <Abouts_us />
      <About_services />
      <Choose/>
      <Expert/>
      <Activities/>

    </>
  )
}

export default page
