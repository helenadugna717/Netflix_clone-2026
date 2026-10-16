import React from 'react'
import './header.css'
function Header() {
  return (
    <div className='header-outer-container'>
  <div className='header_container'>
        <div className='header_left'>
          <ul>
            {/* <li><img src={Netflixlogo} alt="Netflix logo" width="100"/></li> */}
            <li>Netflix</li>
            <li>Home</li>
            <li>TvShows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browse By Languages</li>
          </ul>
        </div>
        <div className='header_right'>
          <ul>
            <li>SearchIcon</li>
            <li>notificationNoneIcon</li>
            <li>AccountBoxIcon</li>
            <li>ArrowDropDownIcon</li>
          </ul>
        </div>
  </div>
    </div>
  )
}

export default Header