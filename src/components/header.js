import styles from '../styles/header.css'

import PropTypes from 'prop-types'
import React from 'react'
import { NavLink } from 'react-router-dom'

import classNames from '../utils/class_names'
import reallyStopPropagation from '../utils/really_stop_propagation'

function HeaderLink (props) {
  return (
    <NavLink
      activeClassName={styles.linkActive}
      className={styles.link}
      exact
      to={props.to}
    >{props.children}</NavLink>
  )
}
HeaderLink.propTypes = {
  to: PropTypes.string.isRequired
}

/*
  Each page end up with a separate instance of the Header component. In order
  to animate the header closed, the new instance must start out in an open
  state. This closed-over variable is shared across all instances.
*/
let headerNavIsOpen = false

export default class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = { isOpen: headerNavIsOpen }

    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
  }

  componentDidMount () {
    document.addEventListener('click', this.close)
    setTimeout(() => this.setState({ isOpen: false }))
  }

  componentDidUpdate () {
    headerNavIsOpen = this.state.isOpen
  }

  componentWillUnmount () {
    document.removeEventListener('click', this.close)
  }

  close () {
    this.setState({ isOpen: false })
  }

  open () {
    this.setState({ isOpen: true })
  }

  render () {
    const classes = classNames(styles.header, {
      [styles.open]: this.state.isOpen
    })
    return (
      <header
        className={classes}
        onClick={reallyStopPropagation}
      >
        <div className={styles.headerLinks}>
          <HeaderLink to='/'>Home</HeaderLink>
          <HeaderLink to='/schedule'>Schedule</HeaderLink>
          <HeaderLink to='/lodging'>Lodging</HeaderLink>
          <HeaderLink to='/rsvp'>RSVP</HeaderLink>
          <HeaderLink to='/registry'>Registry</HeaderLink>
        </div>
        <button
          className={styles.openToggle}
          type='button'
          onClick={this.state.isOpen ? this.close : this.open}
         />
      </header>
    )
  }
}
