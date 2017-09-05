import styles from '../styles/base-page.css'

import React from 'react'

import Header from '../components/header'
import Footer from '../components/footer'


export default (props) => {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.contents}>
        {props.children}
      </div>
      <Footer />
    </div>
  )
}
