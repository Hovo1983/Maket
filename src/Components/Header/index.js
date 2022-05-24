import React from 'react'
import GetStarted from './GetStarted'
import Logo from './Logo'
import NavBar from './NavBar'

export default function Header() {
  return (
    <header>
      <section>
          <div className='burger'>
              <Logo/>
              <NavBar/>
              <GetStarted/>
          </div>
      </section>
    </header>
  )
}
