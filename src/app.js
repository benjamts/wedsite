import React from 'react'
import styles from './app.css'


export default (props) => {
  return (
    <html>
      <head>
        <link rel='stylesheet' href='/styles.css' />
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body>
        <div id='react-root' className={styles.reactRoot}>
          {props.children}
        </div>
        <script src='/bundle.js' />
      </body>
    </html>
  )
}
