import styles from '../styles/venue-page.css'

import React from 'react'

import Base from './base-page'

export default (props) => {
  return (
    <Base>
      <h1 className={styles.header}>Venue</h1>

      <h2 className={styles.subheader}>Location</h2>
      <p className={styles.bodyCopy}>
        <a
          className={styles.link}
          href='https://www.chautauqua.com/lodging/map-directions/'
          target='_blank'
        >The Colorado Chataqua</a> in Boulder, CO.
      </p>
      <p className={styles.bodyCopy}>
        900 Baseline Road<br />
        Boulder, CO 80302<br />
        United States of America
      </p>
      <h2 className={styles.subheader}>The Ceremony</h2>
      <p className={styles.bodyCopy}>
        The ceremony will begin at 4:00pm on the lawn.
      </p>

      <h2 className={styles.subheader}>Dinner and Reception</h2>
      <p className={styles.bodyCopy}>
        After the ceremony we'll move across the lawn to{' '}<a
          className={styles.link}
          href='https://www.chautauqua.com/dining-hall/overview/'
          target='_blank'
        >The Chataqua Dining Hall</a> for a night of food, drinks, and dancing.
      </p>
    </Base>
  )
}
