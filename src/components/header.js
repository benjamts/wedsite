import styles from '../styles/header.css'

import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/cat.jpg'


export default (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLinks}>
        <NavLink className={styles.link} exact to="/">
          <img
            className={styles.logo}
            src={logo}
          />
        </NavLink>
        <NavLink className={styles.link} exact to="/about-us">About Us</NavLink>
        <NavLink className={styles.link} exact to="/venue">Venue</NavLink>
        <NavLink className={styles.link} exact to="/rsvp">RSVP</NavLink>
        <NavLink className={styles.link} exact to="/registry">Registry</NavLink>
        <NavLink className={styles.link} exact to="/bridal-party">Bridal Party</NavLink>
      </div>
    </header>
  )
}
