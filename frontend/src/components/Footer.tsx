import React from 'react'
import logo from '../images/logo.svg'

function Footer () {
  return <footer className="footer" style={{ margin: '4em 0 0 0' }}>
    <div className="container">
      <p><img src={logo} style={{ height: '1.8em' }} /></p>
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
              <small> The source code is licensed by MIT. </small>
            </p>
          </div>
        </div>
        <div className="column is-3">
          <div className="content">
            <small>
              Adapted from a few different technologies. 
            </small>
          </div>
        </div>
        <div className="column is-3">
          <div className="content">
            <small>
              Hope you enjoyed! 
            </small>
          </div>
        </div>
      </div>
    </div>
  </footer>
}

export default Footer
