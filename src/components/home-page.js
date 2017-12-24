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
            alt='The happy couple under a vine-draped archway'
            className={styles.cutePhoto}
            src={cutePhoto}
          />
        </span>
      </div>

      <h2>Our Story</h2>
      <p className={styles.bodyCopy}>
        Sarah and Tyler met back in March of 2012 while attending CU Boulder.
        Sarah was his boss at the dining hall on campus. They were brought
        together by friends who forced them to actually be social and go out
        after work. They quickly became inseperable, aside from a brief period
        in 2013 when Tyler moved to San Francisco. Sarah followed him a few
        months later and they've lived there ever since.
      </p>
      <p className={styles.bodyCopy}>
        Please join us back where it all started!
      </p>
    </Base>
  )
}
