import React from 'react'
import Image from 'next/image'
import background from '../background.jpg'
const Header = () => {
  return (
    <div className='w-screen h-screen'>
      <Image fill='cover' src={background}/>
    </div>
  )
}

export default Header