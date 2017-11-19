import styles from '../styles/footer.css'

import React from 'react'
import { NavLink } from 'react-router-dom'

function FooterLink (props) {
  return (
    <NavLink
      activeClassName={styles.activeLink}
      className={styles.link}
      exact
      to={props.to}
    >{props.children}</NavLink>
  )
}

export default (props) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLinks}>
        <FooterLink to='/about-us'>More About</FooterLink>
      </div>
    </footer>
  )
}
