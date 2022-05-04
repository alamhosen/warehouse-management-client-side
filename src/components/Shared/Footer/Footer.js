import React from 'react';
import FooterTop from '../FooterTop/FooterTop';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='container text-center mt-5 mg'>
            <FooterTop></FooterTop>
            <p>Copyright © {year} | <a style={{textDecoration:'none'}} href="https://golden-grocery.web.app/"><strong>Golden Grocer</strong></a> | All rights reserved</p>

        </div>
    );
};

export default Footer;