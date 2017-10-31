import styles from '../styles/registry-page.css';

import PropTypes from 'prop-types';
import React from 'react'

import Base from './base-page'

import catPic from '../images/cat.jpg'


const LOREM_IPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
const CHARITIES = [
  {
    description: LOREM_IPSUM,
    logoSrc: catPic,
    name: 'Sharks!',
  },
  {
    description: LOREM_IPSUM,
    logoSrc: catPic,
    name: 'Ballet!',
  },
  {
    description: LOREM_IPSUM,
    logoSrc: catPic,
    name: 'Science!',
  },
  {
    description: LOREM_IPSUM,
    logoSrc: catPic,
    name: 'Hungry kids or something!',
  },
];


class Charity extends React.PureComponent {
  render() {
    return (
      <li className={styles.charity}>
        <a className={styles.link}>
          <img
            className={styles.logo}
            src={this.props.logoSrc}
          />
          <h3 className={styles.name}>{this.props.name}</h3>
          <p className={styles.description}>{this.props.description}</p>
        </a>
      </li>
    );
  }
}

export default class RegistryPage extends React.PureComponent {
  render() {
    return (
      <Base>
        <h1 className={styles.header}>Registry</h1>
        <p className={styles.bodyCopy}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>
        <ul className={styles.charityList}>
          {CHARITIES.map(info => <Charity {...info} key={info.name} />)}
        </ul>
      </Base>
    );
  }
}
