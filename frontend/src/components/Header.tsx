import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logoWhite from '../images/logo-white.svg'
import heroBg from '../images/herobg.png'

function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const [titles, setTitles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      // Clear the titles if the search term is empty
      setTitles([]);
      return;
    }

    const fetchTitles = async () => {
      setIsLoading(true);

      try {
        const apiUrl = `https://jsonplaceholder.typicode.com/albums?q=${searchTerm}`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const titles = data.map((album) => album.title);
        setTitles(titles);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTitles();
  }, [searchTerm]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return <Fragment>
    <nav className="navbar is-boxed" role="navigation" aria-label="navigation" style={{ borderBottomWidth: 4, borderBottomColor: 'lightgray', borderBottomStyle: 'solid', marginBottom: 10 }}>
      <div className="container is-flex level">
        <div className='is-flex'>
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <img className='main-nav-logo' src={logoWhite} alt="RetailDemo Store" />
            </Link>
          </div>
          <div className="mySElectee search-container is-flex select" style={{ height: 50, marginTop: 'auto', marginBottom: 'auto', maxWidth: 250, marginLeft: 10, marginRight: 20 }}>
            <select className='' name="" id="" style={{ boxShadow: 'none', border: 0, appearance: 'none', outline: 'none', fontSize: 20, fontWeight: '600', minWidth: 142, }}>
              <option value="Explore">Explore</option>
              <option value="Option one">Shop</option>
              <option value="Option two">Tools</option>
              <option value="Option three">Foot wear</option>
              <option value="Option four">Beauty</option>
              <option value="Option four">Electronic</option>
              <option value="Option four">food</option>
            </select>
            <svg style={{ fill: 'black', width: 45, zIndex: 999, marginLeft: -32 }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"></path></svg>
          </div>
          {/* <div className="my-search-container search-container is-flex input" style={{ borderWidth: 1, borderStyle: 'solid', height: 40, marginTop: 'auto', marginBottom: 'auto', maxWidth: 250 }}>
          <svg className='' style={{ width: 20, marginRight: 10, fill: 'lightgray' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>
          <input type="text" placeholder='Search' style={{ border: 0, outline: 'none' }} />
        </div> */}
          <div className="my-search-container search-container is-flex input" style={{ position: 'relative', borderWidth: 1, borderStyle: 'solid', height: 40, marginTop: 'auto', marginBottom: 'auto', maxWidth: 250 }}>
            <svg className='' style={{ width: 20, marginRight: 10, fill: 'lightgray' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
            </svg>
            <input type="text" placeholder='Search' style={{ border: 0, outline: 'none' }} onChange={handleInputChange} />

            {isLoading ? (
              // Render nothing or a loading indicator
              ''
            ) : titles.length > 0 ? (
              // Render the list of titles if there are items
              <ul className="search-results">
                {titles.map((title, index) => (
                  <li key={index}>{title}</li>
                ))}
              </ul>
            ) : (
              // Render a message when there are no items
              ''
            )}
          </div>
        </div>
        <div className='is-flex level'>
          <div className='this-signup' style={{ fontSize: 20, height: 45, borderRightWidth: 1, borderRightStyle: 'solid', paddingRight: 20, textAlign: 'right' }}>
            <p style={{ margin: 0 }}> Sign In </p>
          </div>
          <div style={{ marginLeft: 10, borderRightWidth: 1, borderRightStyle: 'solid', paddingRight: 20, textAlign: 'right' }}>
            <svg style={{ fill: '#545b64', width: 45, height: 45 }} x="0px" y="0px" viewBox="0 0 245.3 233.2" className="icon icon">
              <g><path d="M149,10H26.6c-4.9,0-8.9,4-8.9,9v79.9c0,4.9,4,9,8.9,9h16.3l0.3,0.5v23c0.3,2.6,1.9,4.8,4.3,5.8
              c0.8,0.3,1.6,0.5,2.4,0.5c1.6,0,3.2-0.6,4.6-1.8l22.7-22.1v-12c0,0,0,0-0.1,0.1l-25.4,24.9v-18c0.2-2.4-0.7-4.7-2.3-6.5
              c-1.7-1.8-4-2.8-6.5-2.8H26.6c-0.2,0-0.4-0.2-0.4-0.5V19c0-0.3,0.2-0.5,0.4-0.5H149c0.2,0,0.4,0.2,0.4,0.5v67.6h8.5V19
              C158,14,154,10,149,10z">
              </path>
                <rect x="38.9" y="31.3" width="72.3" height="8.5"></rect><rect x="119.7" y="31.3" width="17" height="8.5"></rect><rect x="38.9" y="52.5" width="38.3" height="8.5"></rect><rect x="89.9" y="52.5" width="46.8" height="8.5"></rect><rect x="38.9" y="73.8" width="59.5" height="8.5"></rect><rect x="106.9" y="73.8" width="17" height="8.5"></rect><path d="M189.8,222.6c-1.6,0-3.2-0.6-4.4-1.8l-28.6-28c-0.1,0-0.2,0-0.3,0h-62c-5.1-0.4-8.8-4.5-8.8-9.2v-81.8
              c0-6.1,4.9-11,10.8-11h125.4c4.7,0,8.4,4,8.4,9.2v83.9c0,5-3.9,9-8.8,9h-24.9c-0.1,0-0.3,0.2-0.4,0.6V216c0.1,2.6-1.4,5-3.8,6.1
              C191.5,222.4,190.7,222.6,189.8,222.6z"></path>
                <path d="M157,184.4c1.9,0,3.8,0.7,5.4,2.1l25.4,24.8v-17.9c0.1-5,4-9,8.8-9h24.9c0.1,0,0.3-0.2,0.3-0.6V100
              c0-0.5-0.4-0.7-0.7-0.7L96,99.3c-1.3,0-1.9,0.7-1.9,2.1v82c0,0.4,0.7,1,1,1C95.2,184.4,156.7,184.4,157,184.4z" className="background"></path>
                <rect x="138.8" y="114.2" width="42.5" height="8.5"></rect><rect x="189.9" y="114.2" width="21.3" height="8.5"></rect><rect x="109.1" y="114.2" width="21.3" height="8.5"></rect><rect x="109.1" y="135.4" width="34" height="8.5"></rect><rect x="181.4" y="135.4" width="29.8" height="8.5"></rect><rect x="147.3" y="135.4" width="29.8" height="8.5"></rect><rect x="138.8" y="156.7" width="72.3" height="8.5"></rect><rect x="109.1" y="156.7" width="25.5" height="8.5"></rect></g></svg>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 10, paddingRight: 20, textAlign: 'right' }}>
            <span style={{ color: 'white', fontSize: 15, alignItems: 'center', textAlign: 'center', backgroundColor: '#545b64', borderRadius: 50, padding: 10, }}>0</span>
            <svg style={{ fill: '#545b64', width: 45, height: 45 }} data-v-7c505b73="" data-v-cf97f7e4="" viewBox="0 0 50 50" className="icon icon"><g data-v-7c505b73=""><path data-v-7c505b73="" d="M44.4,10.8l-6.6,14.3H21.8L12.2,7.8c-0.6-0.6-1.2-1.2-1.8-1.2H0.9v3.6h8.4l9.5,17.3c0.6,0.6,1.2,1.2,1.8,1.2
		h18.5c0.6,0,1.2-0.6,1.8-1.2l7.8-16.7H44.4z"></path></g><circle data-v-7c505b73="" cx="21.2" cy="34.7" r="3"></circle><circle data-v-7c505b73="" cx="36.1" cy="34.7" r="3"></circle></svg>
          </div>
        </div>
      </div>
      <div className='show-on-mobile' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, paddingLeft: 10, paddingRight: 10 }}>
        <div className='' style={{ fontSize: 20, }}>
          <p style={{ margin: 0 }}> Sign In </p>
        </div>
        <div className="search-container is-flex input" style={{ borderWidth: 1, borderStyle: 'solid', height: 40, marginTop: 'auto', marginBottom: 'auto', maxWidth: 180 }}>
          <svg className='' style={{ width: 20, marginRight: 10, fill: 'lightgray' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
            </svg>
            <input type="text" placeholder='Search' style={{ border: 0, outline: 'none' }} onChange={handleInputChange} />

            {isLoading ? (
              // Render nothing or a loading indicator
              ''
            ) : titles.length > 0 ? (
              // Render the list of titles if there are items
              <ul className="search-results">
                {titles.map((title, index) => (
                  <li key={index}>{title}</li>
                ))}
              </ul>
            ) : (
              // Render a message when there are no items
              ''
            )}
        </div>
      </div>
    </nav>
  </Fragment >
}

export default Header
