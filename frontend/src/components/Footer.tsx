import React from 'react'
import logo from '../images/logo.svg'

function Footer () {
  return <footer className="footer" style={{ margin: '4em 0 0 0' }}>
    <div className="container">
      <p><img src={logo} style={{ height: '9rem' }} /></p>
      <div className="columns">
        <div className="column is-3">
          <div className="content">
            <p>
              <strong>Retail demo store</strong> 
            </p>
          </div>
        </div>
        <div className="column is-3">
          <div className="content">
            <p>
              <big> The source code is licensed by MIT. </big>
            </p>
          </div>
        </div>
        <div className="column is-3">
          <div className="content">
            <big>
              Adapted from a few different technologies -- thank you to AWS-Samples and FourTheorem.
            </big>
          </div>
        </div>
        <div className="column is-3">
          <div className="content">
            <big>
              Hope you enjoyed! 
            </big>
          </div>
        </div>
      </div>
    </div>
  </footer>
}

export default Footer
