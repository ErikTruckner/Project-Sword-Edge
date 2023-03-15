import { BrowserRouter } from 'react-router-dom'

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from './components'

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-o'>
        <div className='relative z-o'>
          <Navbar />
          <Hero />
          <StarsCanvas />
        </div>
        <About />
        <Works />
        <Tech />

        <Experience />

        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
