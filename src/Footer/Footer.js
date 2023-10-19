import React from 'react';
import './Footer.css'; 

function Footer() {
    return (<footer className="footer">
        <div className="footer-content">
            <div className="footer-section">
                <h3>Help & Support</h3>
                <ul>
                    <li>FAQ</li>
                    <li>Track Your Order</li>
                    <li>Returns & Exchanges</li>
                    <li>Customer Service</li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>Company</h3>
                <ul>
                    <li>About Us</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Careers</li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>Connect With Us</h3>
                <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                    <li>YouTube</li>
                </ul>
            </div>
        </div>
        <div className="footer-bottom">
            <p>&copy; 2023 Your Company</p>
        </div>
    </footer>);
}

export default Footer;