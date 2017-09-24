import styles from '../styles/rsvp-page.css';

import React from 'react'

import Base from './base-page'
import RSVPForm from './rsvp-form'


export default (props) => {
  return (
    <Base>
      <h1 className={styles.header}>RSVP</h1>
      <h2>Can you make it?</h2>
      <RSVPForm />
    </Base>
  )
}
