import styles from '../styles/header.css'

import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/cat.jpg'


function HeaderLink(props) {
  return (
    <NavLink
      activeClassName={styles.linkActive}
      className={styles.link}
      exact
      to={props.to}
    >{props.children}</NavLink>
  );
}

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false }
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const classes = styles.header + (this.state.open ? ' ' + styles.open : '');
    return (
      <header className={classes}>
        <div className={styles.headerLinks}>
          <HeaderLink to="/">Home</HeaderLink>
          <HeaderLink to="/venue">Venue</HeaderLink>
          <HeaderLink to="/rsvp">RSVP</HeaderLink>
          <HeaderLink to="/registry">Registry</HeaderLink>
          <HeaderLink to="/bridal-party">Bridal Party</HeaderLink>
        </div>
        <button
          className={styles.openToggle}
          type="button"
          onClick={this.toggleOpen}
        ></button>
      </header>
    )
  }
}
