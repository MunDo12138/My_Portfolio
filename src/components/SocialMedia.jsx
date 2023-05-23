import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <BsLinkedin />  
        </div>
        <div>
          <BsGithub />
        </div>
    </div>
  )
}

export default SocialMedia