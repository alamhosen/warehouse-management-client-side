import React from 'react';

const Footer = () => {
    const today =  new Date();
    const year = today.getFullYear();
    return (
        <div className='container text-center mt-3'>
             <p>Copyright © {year} | <strong>Golden Grocer</strong> | All rights reserved</p>
        </div>
    );
};

export default Footer;