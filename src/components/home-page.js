import styles from '../styles/home-page.css'

import React from 'react'

import Base from './base-page'
import CountdownTimer from './countdown-timer'
import cutePhoto from '../images/engagement-photo-narrow.jpg'

const ceremonyStart = new Date('Sat, 08 Sep 2018 22:00:00 GMT')

export default (props) => {
  return (
    <Base>
      {/*
        The spaces around Tyler's name fix a problem with the font that causes
        the "T" to be clipped if no characters precede it on a line.
      */}
      <h1 className={styles.header}>
         Tyler Benjamin
        <br />&amp;<br />
        Sarah Symonds
      </h1>
      <p className={styles.subheader}>
        September 9th, 2018 &bull; Boulder, CO
        <CountdownTimer end={ceremonyStart} />
      </p>
      <img
        className={styles.cutePhoto}
        src={cutePhoto}
      />

      <h2 className={styles.sectionHeader}>Our Story</h2>
      <p className={styles.bodyCopy}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </Base>
  )
}
