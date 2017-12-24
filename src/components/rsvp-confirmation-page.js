import styles from '../styles/rsvp-confirmation-page.css'

import React from 'react'

import Base from './base-page'

export default (props) => {
  return (
    <Base>
      <h1 className={styles.header}>Thank You!</h1>
      <h2 className={styles.subheader}>We treasure your friendship!</h2>
    </Base>
  )
}
