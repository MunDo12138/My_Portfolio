import React from 'react'
import { BsGithub, BsLinkedin, BsPersonFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <Link to="https://acrobat.adobe.com/id/urn:aaid:sc:ap:9558af8a-8d04-4b6f-8517-54445868bd56" target="_blank" rel="noopener noreferrer">
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
