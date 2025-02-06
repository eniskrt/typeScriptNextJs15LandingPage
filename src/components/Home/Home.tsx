import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Feature from './Feature/Feature'

const Home = () => {
  return (
    <div className='overflow-hidden h-[10000px]'>
      <Hero/>
      <About/>
      <Feature/>
    </div>
  )
}

export default Home