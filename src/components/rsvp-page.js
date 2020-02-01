import styles from '../styles/rsvp-page.css'

import React from 'react'

import Base from './base-page'

export default (props) => {
  return (
    <Base>
      <h1 className={styles.header}>It's Too Late</h1>
      <h2 className={styles.subheader}>You missed it.</h2>
      <p>It was a lot of fun and you missed out. Sorry!</p>
    </Base>
  )
}
