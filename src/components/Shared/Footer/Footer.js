import React from 'react';

const Footer = () => {
    const today =  new Date();
    const year = today.getFullYear();
    return (
        <div className='container'>
             <p>Copyright © {year} | Golden Grocer | All rights reserved</p>
        </div>
    );
};

export default Footer;