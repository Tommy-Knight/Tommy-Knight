import React from 'react';
import './Footer.css';
import emoji from 'react-easy-emoji';

function Footer() {
    return (
        <footer>
            <div className="inner">

                <div className="footer-content">
                    <p>{emoji("Thanks for visiting 🖤")}</p>
                </div>

            </div>
        </footer>
    );
}
export default Footer;