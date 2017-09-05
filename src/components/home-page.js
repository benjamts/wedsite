import styles from '../styles/home-page.css'

import React from 'react'

import Base from './base-page'
import cutePhoto from '../images/cat.jpg'


export default (props) => {
  return (
    <Base>
      <h1 className={styles.header}>Tyler&nbsp;Benjamin<br/>&amp;<br/>Sarah&nbsp;Symonds</h1>
      <img
        className={styles.cutePhoto}
        src={cutePhoto}
      />
      <p className={styles.bodyCopy}>
        We're pleased to announce our wedding celebration taking place November 2, 2018.
      </p>

      <h2 className={styles.subheader}>Our Story</h2>
      <p className={styles.bodyCopy}>
        Tyler Benjamin and Sarah Symonds met while in school at CU Boulder.
        They were both working at a dining hall on campus at the time. Foobar
      </p>
    </Base>
  )
}
