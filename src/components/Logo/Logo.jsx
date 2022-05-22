import React from 'react'

import logo from '../../assets/img/logo.jpg';

const Logo = () => {
  return (
    // <h3>Logo</h3>
    <div className="logo">
      <a href="/">
        <img src={logo} alt="logo" />
        logo
      </a>
    </div>
  )
}

export default Logo