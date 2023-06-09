import React from 'react'

import { About, Footer, Header, Skills, Testimonial, Work } from './containers';
import { Navbar } from './components';
import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Testimonial />
      <Skills />
      <Work />
      <Footer />
    </div>
  )
}

export default App