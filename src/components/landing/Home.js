import React from 'react'
import WhyChoose from './WhyChoose'
import Hero from './Hero'
import LaunchPlatform from './LaunchPlatform'
import SideBox from './SideBox'
import StartSomething from './StartSomething'
import Store from './Store'
import Technology from './Technology'
import HomeBlog from './HomeBlog'
import Carousel from './Carousel'
import FormContact from './FormContact'


const Home = () => {
  return (
    <>
      <Hero/>
      <Technology/>
      <Store/>
      <StartSomething/>
      <LaunchPlatform/>
      <SideBox/>
      <WhyChoose/>
      <HomeBlog/>
      <Carousel/>
      <FormContact/>
    </>
  )
}

export default Home
