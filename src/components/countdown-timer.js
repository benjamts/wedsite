import styles from '../styles/countdown-timer.css';

import PropTypes from 'prop-types';
import React from 'react'

import diffDates from '../utils/diff-dates';


class CountdownTimer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      now: new Date()
    };

    this.tick = () => {
      this.setState({
        now: new Date()
      });
    };
  }

  componentWillMount() {
    this.tickInterval = window.setInterval(this.tick, 500);
  }

  componentWillUnmount() {
    clearInterval(this.tickInterval);
  }

  render() {
    const dateDiff = diffDates(this.state.now, this.props.end);

    return (
      <span className={styles.timer}>
        <span className={styles.unitSection}>
          <span className={styles.count}>{dateDiff.days}</span>
          <span className={styles.label}>Days</span>
        </span>
        <span className={styles.unitSection}>
          <span className={styles.count}>{dateDiff.hours}</span>
          <span className={styles.label}>Hours</span>
        </span>
        <span className={styles.unitSection}>
          <span className={styles.count}>{dateDiff.minutes}</span>
          <span className={styles.label}>Minutes</span>
        </span>
        <span className={styles.unitSection}>
          <span className={styles.count}>{dateDiff.seconds}</span>
          <span className={styles.label}>Seconds</span>
        </span>
      </span>
    );
  }
}
CountdownTimer.propTypes = {
  end: PropTypes.instanceOf(Date).isRequired
};


export default CountdownTimer;
