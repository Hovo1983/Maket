import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav>
      <ul>
          <li><Link to='/rooms'>Rooms</Link></li>
          <li><Link to='/reservation'>Reservation</Link></li>
          <li><Link to='/contacts'>Contacts</Link></li>
      </ul>
    </nav>
  )
}
