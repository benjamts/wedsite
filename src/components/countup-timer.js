import styles from '../styles/countup-timer.css'

import PropTypes from 'prop-types'
import React from 'react'

import diffDates from '../utils/diff-dates'

class CountupTimer extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      now: new Date()
    }

    this.tick = () => {
      this.setState({
        now: new Date()
      })
    }
  }

  componentDidMount () {
    this.tickInterval = window.setInterval(this.tick, 500)
  }

  componentWillUnmount () {
    clearInterval(this.tickInterval)
  }

  render () {
    const dateDiff = diffDates(this.props.start, this.state.now)

    const yearLabel = 'Year' + (dateDiff.years === 1 ? '' : 's')
    const monthLabel = 'Month' + (dateDiff.months === 1 ? '' : 's')
    const dayLabel = 'Day' + (dateDiff.days === 1 ? '' : 's')
    const hourLabel = 'Hour' + (dateDiff.hours === 1 ? '' : 's')
    const minuteLabel = 'Minute' + (dateDiff.minutes === 1 ? '' : 's')
    const secondLabel = 'Second' + (dateDiff.seconds === 1 ? '' : 's')

    return (
      <span className={styles.timer}>
        <span className={styles.unitRow}>
          <span className={styles.unitSection}>
            <span className={styles.count}>{dateDiff.years}</span>
            <span className={styles.label}>{yearLabel}</span>
          </span>
          <span className={styles.unitSection}>
            <span className={styles.count}>{dateDiff.months}</span>
            <span className={styles.label}>{monthLabel}</span>
          </span>
          <span className={styles.unitSection}>
            <span className={styles.count}>{dateDiff.days}</span>
            <span className={styles.label}>{dayLabel}</span>
          </span>
        </span>
        <span className={styles.unitRow}>
          <span className={styles.unitSection}>
            <span className={styles.count}>{dateDiff.hours}</span>
            <span className={styles.label}>{hourLabel}</span>
          </span>
          <span className={styles.unitSection}>
            <span className={styles.count}>{dateDiff.minutes}</span>
            <span className={styles.label}>{minuteLabel}</span>
          </span>
          <span className={styles.unitSection}>
            <span className={styles.count}>{dateDiff.seconds}</span>
            <span className={styles.label}>{secondLabel}</span>
          </span>
        </span>
      </span>
    )
  }
}
CountupTimer.propTypes = {
  start: PropTypes.instanceOf(Date).isRequired
}

export default CountupTimer
