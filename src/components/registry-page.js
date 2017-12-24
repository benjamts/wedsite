import styles from '../styles/registry-page.css'

import PropTypes from 'prop-types'
import React from 'react'

import Base from './base-page'

import kathyMataLogo from '../images/kathy-mata-ballet-logo.png'
import donorsChooseLogo from '../images/donors-choose-logo.png'
import cmeraLogo from '../images/cmera-logo.png'

const CHARITIES = [
  {
    description: `
      This is Sarah's ballet company. They are a volunteer company that brings
      dance performances to senior communities, community centers, and other
      audiences who ordinarily would not have the opportunity to see a live
      ballet, modern or jazz performance accompanied by professional musicians.
    `,
    logoSrc: kathyMataLogo,
    name: 'Kathy Mata Ballet',
    siteLink: 'http://kathymataballet.org/?page_id=370'
  },
  {
    description: `
      Those of you who know Sarah well know how much she loves sharks. Last
      summer she had the opportunity to participate in shark research on a boat
      off the coast of Florida with the Coastal Marine Education and Research
      Academy (CMERA). This charity was established by the same people. They
      aim to spread awareness of global marine conservation challenges, and fund
      further shark research.
    `,
    logoSrc: cmeraLogo,
    name: 'The Moore Center For Marine Conservation',
    siteLink: 'https://mooreconservation.org/'
  },
  {
    description: `
      Founded in 2000 by a high school teacher in the Bronx, DonorsChoose.org
      empowers public school teachers from across the country to request
      much-needed materials and experiences for their students. Teachers from
      every corner of America create classroom project requests, and you can
      give any amount to the project that inspires you.
    `,
    logoSrc: donorsChooseLogo,
    name: 'DonorsChoose.org',
    siteLink: 'https://www.donorschoose.org/'
  }
]

class Charity extends React.PureComponent {
  render () {
    return (
      <li className={styles.charity}>
        <a className={styles.charityLink} href={this.props.siteLink}>
          <img
            className={styles.charityLogo}
            src={`${this.props.logoSrc}`}
          />
          <h3 className={styles.charityName}>{this.props.name}</h3>
          <p className={styles.charityDescription}>{this.props.description}</p>
        </a>
      </li>
    )
  }
}
Charity.propTypes = {
  description: PropTypes.string.isRequired,
  logoSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  siteLink: PropTypes.string.isRequired
}

export default class RegistryPage extends React.PureComponent {
  render () {
    return (
      <Base>
        <h1 className={styles.header}>Registry</h1>
        <p className={styles.bodyCopy}>
          We'd appreciate it if you didn't buy us anything for our wedding.
          (We will, of course, accept any priceless family heirlooms that you've
          been saving for the occasion.)
        </p>
        <p className={styles.bodyCopy}>
          We already have all the things we need for our home. We have a
          coffee table that we dragged in off the street on Sarah's first visit.
          (At the time Tyler's only furniture was a mattress on the floor and a
          borrowed air mattress that was doubling as a couch.) We have several
          sets of mismatched dishes acquired from various sources (mostly
          friends who no longer needed them are were kind enough to gift them
          to us). We have a very strange painting of a fox hunt hanging over our
          fireplace that we found on a street corner half a block away. (Did we
          mention we've found a lot of great stuff on the street over the
          years?) We have all our needs covered. Plus, in a small apartment we
          don't have much room to put more things.
        </p>
        <p className={styles.bodyCopy}>
          Instead, please consider donating the money you would have spent on a
          gift for us (or just saving it for yourself). There are a few
          suggested groups below, but feel free to find a charity that supports
          a cause that's important to you. (Check out <a
            href='https://www.charitywatch.org/home'
          >CharityWatch</a> and <a
            href='https://www.charitynavigator.org/'
          >Charity Navigator</a> if you're looking for reputable charities.)
        </p>
        <ul className={styles.charityList}>
          {CHARITIES.map(info => <Charity {...info} key={info.name} />)}
        </ul>
      </Base>
    )
  }
}
