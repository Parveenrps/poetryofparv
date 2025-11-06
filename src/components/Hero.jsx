import React from 'react'
import Left from './Left'
import Right from './Right'

const Hero = () => {
  return (
    <div className='hero z-10 w-screen h-screen flex'>
        <Left></Left>
        <Right></Right>
    </div>
  )
}

export default Hero
