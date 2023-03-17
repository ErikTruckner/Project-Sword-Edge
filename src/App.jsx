import { BrowserRouter } from 'react-router-dom'

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Works,
  StarsCanvas,
} from './components'

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0'>
        <Navbar />
        <div className='relative z-0'>
          <Hero />
          <StarsCanvas />
        </div>
        <About />
        <Works />

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
