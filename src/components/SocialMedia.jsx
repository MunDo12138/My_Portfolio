import React from 'react'
import { BsGithub, BsLinkedin, BsPersonFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <Link to="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:83ba7da6-d281-39c9-b5ee-9652119a6900" target="_blank" rel="noopener noreferrer">
            <BsPersonFill />
          </Link>
        </div>
        <div>
          <Link to="https://www.linkedin.com/in/hungleongli/" target="_blank" rel="noopener noreferrer">
            <BsLinkedin />
          </Link>
        </div>
        <div>
          <Link to="https://github.com/MunDo12138" target="_blank" rel="noopener noreferrer">
            <BsGithub />
          </Link>
        </div>
    </div>
  )
}

export default SocialMedia