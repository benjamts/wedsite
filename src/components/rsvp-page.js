import styles from '../styles/rsvp-page.css'

import React from 'react'

import Base from './base-page'

export default (props) => {
  return (
    <Base>
      <h1 className={styles.header}>It's Too Late</h1>
      <h2 className={styles.subheader}>You can't come now.</h2>
      <p>
        <b>Just kidding!</b> If you're planning to attend and haven't already
        told us, send an email to <a
           className={styles.link}
           href='mailto:rsvp@tylerandsarah.com'
         >rsvp@tylerandsarah.com</a> containing a list of everyone in your
         party and an apology for making us wait so long. ;)
      </p>
    </Base>
  )
}
