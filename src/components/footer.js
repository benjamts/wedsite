import styles from '../styles/footer.css'

import React from 'react'
import { NavLink } from 'react-router-dom'


export default (props) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLinks}>
        <NavLink exact to="/about-us">More About</NavLink>
      </div>
    </footer>
  )
}
