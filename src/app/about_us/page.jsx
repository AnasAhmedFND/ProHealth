import About_services from '@/Components/About_us/About_services'
import Abouts_us from '@/Components/About_us/Abouts_us'
import Activities from '@/Components/About_us/Activities'
import Backseat_about from '@/Components/About_us/Backseat_about'
import Choose from '@/Components/About_us/Choose'
import Expert from '@/Components/About_us/Expert'
import Recognition from '@/Components/About_us/Recognition'
import React from 'react'

const page = () => {

  return (
    < >
      <Abouts_us />
      <About_services />
      <Choose/>
      <Expert/>
      <Activities/>
      <Recognition/>
      <Backseat_about/>

    </>
  )
}

export default page
