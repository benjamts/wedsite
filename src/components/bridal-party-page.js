import styles from '../styles/bridal-party-page.css';

import PropTypes from 'prop-types';
import React from 'react'

import Base from './base-page'
import catPic from '../images/cat.jpg'


const LOREM_IPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

const PARTY_MEMBERS = [
  {
    name: 'Amanda Muse',
    role: 'Officiant',
    bio: LOREM_IPSUM,
    imgSrc: catPic,
  },
  {
    name: 'George Haws',
    role: 'Best Man',
    bio: LOREM_IPSUM,
    imgSrc: catPic,
  },
  {
    name: 'Stephanie Symonds',
    role: 'Maid of Honor',
    bio: LOREM_IPSUM,
    imgSrc: catPic,
  },
  {
    name: 'Casey Moher',
    role: 'Bridesmaid',
    bio: LOREM_IPSUM,
    imgSrc: catPic,
  },
  {
    name: 'Dane Pettine',
    role: 'Groomsman',
    bio: LOREM_IPSUM,
    imgSrc: catPic,
  },
  {
    name: 'Monika De la Rosa',
    role: 'Bridesmaid',
    bio: LOREM_IPSUM,
    imgSrc: catPic,
  },
  {
    name: 'Kaitlynne Benjamin',
    role: 'Groomsmaid',
    bio: LOREM_IPSUM,
    imgSrc: catPic,
  },
  {
    name: 'John Symonds',
    role: 'Bridesman',
    bio: LOREM_IPSUM,
    imgSrc: catPic,
  },
  {
    name: 'Karina Benjamin',
    role: 'Groomsmaid',
    bio: LOREM_IPSUM,
    imgSrc: catPic,
  },
];

class PartyMember extends React.PureComponent {
  render() {
    return (
      <li className={styles.partyMember}>
        <span
          className={styles.pictureFrame}
          style={{ backgroundImage: `url(${this.props.imgSrc})` }}
        >
          <img
            alt={`Picture of ${this.props.name}`}
            className={styles.photo}
            src={`/${this.props.imgSrc}`}
          />
        </span>
        <h2 className={styles.name}>{this.props.name}</h2>
        <p className={styles.role}>{this.props.role}</p>
        <p className={styles.bio}>{this.props.bio}</p>
      </li>
    );
  }
}
PartyMember.propTypes = {
  bio: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
}

export default class BridalPartyPage extends React.PureComponent {
  render() {
    return (
      <Base>
        <h1 className={styles.header}>Bridal Party</h1>
        <ul className={styles.partyMemberList}>
          {PARTY_MEMBERS.map(info => <PartyMember {...info} key={info.name} />)}
        </ul>
      </Base>
    );
  }
}
