import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
        <p className='title-text1' >MyFast<span style={{color:'#63b178'}}>X</span></p>
          <p>
            MyFastX is a leading logistics platform that provides hyper-local, 
            on-demand delivery solutions for individuals and businesses. 
            Whether you need a delivery boy for your shop or to ship items 
            within city, MyFastX is your trusted partner.
          </p>
          <p>
            With a mission to revolutionize logistics through innovation 
            and technology, MyFastX is committed to providing seamless, 
            end-to-end delivery solutions that exceed customer expectations.
          </p>
          <p><FontAwesomeIcon icon={faHome} /> Nayagon, Nimi Vihar, Sector 89, Noida Phase 02, Noida</p>
          <p><FontAwesomeIcon icon={faEnvelope} /> care@myfastx.com</p>
          <p><i className="fa fa-phone"></i> +91 8961310988</p>
        </div>

        <div className="footer-section company">
          <h3>Company</h3>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a  style={{ color:'#63B178'}}href="#whatwedo">What We Do?</a></li>
            <li><a href="#investors">Investors</a></li>
            <li><a href="#pressrelease">Press Release</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#pricing">Pricing Details</a></li>
          </ul>
        </div>

        <div className="footer-section policies">
          <h3>Policies</h3>
          <ul>
            <li><a href="#terms">Terms And Conditions</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#cookie">Cookie Policy</a></li>
            <li><a href="#fraud">Fraud Disclaimer</a></li>
          </ul>
        </div>

        <div className="footer-section help">
          <h3>Help</h3>
          <ul>
            <li><a href="#restricted">Restricted Items</a></li>
            <li><a href="#parcel">Parcel size and weight guide</a></li>
            <li><a href="#packaging">Packaging guide</a></li>
          </ul>
        </div>

        <div className="footer-section support">
          <h3>Support</h3>
          <ul>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#customer">Customer Care</a></li>
            <li><a href="#driver">Driver Terms and Conditions</a></li>
            <li><a href="#instruction">Packaging Instruction</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-presence">
          <h4>Our Presence</h4>
          <p>Delhi | Noida | Greater Noida | Ghaziabad | Gurugram | Faridabad | Bahadurgarh | Kolkata</p>
        </div>
        
      </div>
       <div className='footer-last'>
        <p>© 2024 MYFASTEX TECHNOLOGIES PVT LTD. All Rights Reserved</p>
        <p>CIN: U52219UP2023PTC192260</p>
        </div>
    </footer>
  );
};

export default Footer