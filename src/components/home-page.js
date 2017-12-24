import styles from '../styles/home-page.css'

import React from 'react'

import Base from './base-page'
import CountdownTimer from './countdown-timer'
import cutePhoto from '../images/cute-photo-2.jpg'

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
      <div className={styles.pictureWall}>
        <span
          className={styles.pictureFrame}
          style={{ backgroundImage: `url(${cutePhoto})` }}
        >
          <img
            alt="The happy couple under a vine-draped archway"
            className={styles.cutePhoto}
            src={cutePhoto}
          />
        </span>
      </div>

      <p className={styles.bodyCopy}>
        Please help us celebrate our love back in the city where we first met.
      </p>
    </Base>
  )
}
