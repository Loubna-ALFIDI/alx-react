import React from 'react';
import { getFooterCopy } from '../utils/utils';
import './Footer.css';


function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <div className="App-footer">
            Copyright {currentYear} - {getFooterCopy()}
            </div>
        </>
    );
}

export default Footer;
