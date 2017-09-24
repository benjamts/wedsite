import styles from '../styles/base-page.css'
import tinyBackground from '../images/midday-flatirons-tiny.jpg'
import largeBackground from '../images/midday-flatirons.jpg'

import React from 'react'

import Header from '../components/header'


/*
  Closing over this so that transitioning between pages doesn't re-trigger the
  blur animation.
*/
let preloadedBGImg = tinyBackground;

class BasePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      preloaded: preloadedBGImg === largeBackground,
    };

    // Scroll to top on page change
    window.scrollTo(0, 0);

    /*
      Preload the very large background image. Once it's been loaded, remove
      the CSS class that uses a smaller version and transitions the removal of
      a blur effect.
    */
    const preloadImg = new window.Image();
    preloadImg.addEventListener('load', () => {
      preloadedBGImg = largeBackground;
      this.setState({ preloaded: true });
    });
    preloadImg.src = largeBackground;
  }

  render() {
    let bgClasses = styles.backdrop;
    if (!this.state.preloaded) {
      bgClasses += ' ' + styles.loadingImage;
    }

    return (
      <div className={styles.page}>
        <Header />
        <div className={styles.contents}>
          {this.props.children}
        </div>
        <div
          className={bgClasses}
          role="img"
          style={{ backgroundImage: `url(${preloadedBGImg})` }}
          title="The Flatirons in Boulder, CO"
        ></div>
      </div>
    )
  }
}

export default BasePage;
