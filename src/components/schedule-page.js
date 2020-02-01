import styles from '../styles/venue-page.css'

import React from 'react'

import Base from './base-page'

export default (props) => {
  return (
    <Base>
      <h1 className={styles.header}>Schedule</h1>

      <h2 className={styles.subheader}>Welcome Party</h2>
      <h3 className={styles.subsubheader}>9/08 5:30pm&ndash;7:30pm<br />
        <a
          className={styles.link}
          href='https://www.google.com/maps/place/Chautauqua+Community+House/@39.9978717,-105.281387,15z/data=!4m7!3m6!1s0x0:0x21c91242762c32fd!5m1!1s2018-09-03!8m2!3d39.9978717!4d-105.281387'
          rel='noopener noreferrer'
          target='_blank'
        >Mission House Lodge
        </a>
      </h3>
      <p className={styles.bodyCopy}>
        To thank our guests for coming to Boulder for us, we are inviting you
        come see us before the big day. Dave and Kathy Symonds are putting
        together light snacks and beverages. There will be games, music, and
        our smiling faces. Come relax and have fun!
      </p>
      <p className={styles.bodyCopy}>
        Have a speech or funny story you want to share? This is your chance!
      </p>
      <p className={styles.bodyCopy}>
        <b>Dress code:</b> Casual/silly! We have a general appreciation for
        Hawaiian shirts, cat prints, and any clothing bearing our faces.
      </p>

      <h2 className={styles.subheader}>The Ceremony</h2>
      <h3 className={styles.subsubheader}>9/09 4:15pm<br />
        <a
          className={styles.link}
          href='https://www.google.com/maps/place/Chautauqua+Park/@39.9991996,-105.2814996,15z/data=!4m2!3m1!1s0x0:0x761597124a9e2eab?sa=X&ved=2ahUKEwjC2vuj7ujcAhVmi1QKHeJTBcAQ_BIwCnoECAsQCw'
          rel='noopener noreferrer'
          target='_blank'
        >The Chautauqua Green
        </a>
      </h3>
      <p className={styles.bodyCopy}>
        There will be a short ceremony on The Chautauqua Green, an open grassy
        space in front of the Dining Hall and below the Flatirons.
      </p>
      <p className={styles.bodyCopy}>
        Afterward, we'll move across the lawn to{' '}
        <a
          className={styles.link}
          href='https://www.google.com/maps/place/Chautauqua+Dining+Hall/@39.9984481,-105.2828385,17z/data=!3m1!4b1!4m5!3m4!1s0x876bec46fbf536f7:0x152c257e87bf9572!8m2!3d39.998444!4d-105.2806498'
          rel='noopener noreferrer'
          target='_blank'
        >The Chautauqua Dining Hall
        </a>
        for a night of food, drinks, and dancing.
      </p>
      <p className={styles.bodyCopy}>
        <b>Dress code:</b> We imagine we'll see a lot of suits and dresses.
        If that's too formal for you&mdash;or not formal enough&mdash;please
        wear whatever you'll feel comfortable in! The ceremony will be on a
        lawn, so think twice before choosing to wear your 10 inch heels.
      </p>

      <h2 className={styles.subheader}>Farewell Breakfast</h2>
      <h3 className={styles.subsubheader}>9/10 8:30am&ndash;10:30am<br />
        <a
          href='https://www.google.com/maps/place/Center+for+Community,+2010+Willard+Loop+Dr,+Boulder,+CO+80305/data=!4m2!3m1!1s0x876bedcac1658e7b:0x6f3bec96c07dc864?sa=X&ved=2ahUKEwilg4bY7-jcAhXcIjQIHYhIBDAQ8gEwAHoECAAQAQ'
          rel='noopener noreferrer'
          target='_blank'
          className={styles.link}
        >The Treehouse Room At The C4C
        </a>
      </h3>
      <p className={styles.bodyCopy}>
        Join us for an all you can eat breakfast buffet. Our space can only seat
        about 20 at once, but there will be standing room to chat and seating
        throughout the rest of the dining hall. The two of us will be there the
        entire 2 hours. Please join when you can.
      </p>
      <p className={styles.bodyCopy}>
        The closest all-day parking is in lot 306 off of Regent Drive. You can
        also park in lot 319 for up to four hours (located directly west of the
          C4C). Both lots take coins, dollar bills and credit cards.
        ($1.50&ndash;$1.75 per hour)
      </p>
      <p className={styles.bodyCopy}>
        <b>Dress Code:</b> Casual. A Buffs shirt if you have one ;)<br />
        <b>Price:</b> ~$13/person at the door.<br />
        <b>Fun Fact:</b> This is where we met. ♥
      </p>
    </Base>
  )
}
