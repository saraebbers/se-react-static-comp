import React from 'react';
import './Footer.css';

const Footer = (props) => {
  return(
      <div>
        <p>&copy;</p>
        <p>{document.write(new Date().getFullYear())} </p>
      </div>
    )
}

export default Footer;
