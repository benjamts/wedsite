import styles from '../styles/lodging-page.css'

import React from 'react'

import Base from './base-page'

export default (props) => {
  return (
    <Base>
      <h1 className={styles.header}>Lodging</h1>
      <h2 className={styles.subheader}>Chataqua Cottages{' '}<a
        className={styles.textAnchor}
        href='https://www.chautauqua.com/lodging/cottages-lodges/overview/'
        target='_blank'
      >View</a></h2>
      <p className={styles.textBody}>
        Since 1898, the Colorado Chautauqua has been hosting visitors seeking
        respite through its quiet, contemplative natural beauty. Each cabin has
        its own unique history and historic charm. No two cottages are alike
        and may include curiosities such as antique furnishings, claw foot tubs,
        or fireplaces. All accommodations are television and phone-free to allow
        guests to relax and unplug.
      </p>
      <p className={styles.textBody}>
        Cottages are available in studio, 1, 2 or 3 bedroom configurations each
        with fully equipped kitchens and screened-in front porches. All
        accommodations are smoke-free.
      </p>
      <p className={styles.textBody}>
        The cottages are located on the same site as the ceremony and reception.
        There is a two-night minimum stay.
      </p>

      <h2 className={styles.subheader}>Best Western Plus Boulder Inn{' '}<a
        className={styles.textAnchor}
        href='https://www.bestwestern.com/en_US/book/hotel-rooms.06103.html?checkIn=2018-09-08&checkOut=2018-09-10'
        target='_blank'
      >Book</a></h2>
      <p className={styles.textBody}>
        This hotel is a short, easy drive from The Colorado Chautauqua.
      </p>

      <h2 className={styles.subheader}>Hotel Boulderado{' '}<a
        className={styles.textAnchor}
        href='http://www.boulderado.com/'
        target='_blank'
      >View</a></h2>
      <p className={styles.textBody}>
        The historic Hotel Boulderado is located two blocks from the Pearl
        Street walking mall. It's slightly further from the wedding site, but
        perfect if you're planning to spend time shopping/dining on Pearl.
      </p>
    </Base>
  )
}
