import './Testimonials.css';

import Coupon from '../Acc';
import Phone from '../../assets/Phone.png'
import Email from '../../assets/Mail.png'
import './Contacts.css'

const Contacts = () => {
  return (
    <div className="testimonials-container">
     
     <div className="testimonials-left">
        <div className="testimonials-header">
          <div className="testimonials-subheader">
            <h4>What our partner says</h4>
          </div>
          <h2 style={{marginBlockEnd:"2rem"}}>Ready to Get Started?</h2>
        </div>
        <p className='test-des' style={{marginBlockEnd:"2rem"}}>
        Don't miss out on this incredible opportunity to be part of a leading delivery and logistics platform. Sign up now for just Rs.999 and start driving your way to success with MyFastX!
        </p>
                
        <button className='register-button custom-button' style={{width:"fit-content",paddingInline:"1rem"}}>Register Now</button>
        <p className='test-des'> For more information</p>
        <p > Contact us at:</p>
        <div className='info-contact'>
            <img src={Phone}/><p >+91-XXXXX XXXXX</p>
        </div>
        <div  className='info-contact'>
            <img src={Email}/><p className='test-des'>support@myfastx.com</p>
        </div>
       
     
       
      </div>

      <div className="testimonials-right" style={{borderLeft:"3.3px solid #B4B4B4",borderTop:"3.3px solid #B4B4B4",padding:"1rem",marginTop: '6rem'}}>
        
      <div className="testimonials-left left-cotainer-border">
        <div className="testimonials-header">
          <div className="testimonials-subheader">
            <h4>Frequently Asked Questions</h4>
          </div>
          <h2 style={{width:"fit-content"}}>Got Questions? We’ve Got Answers!</h2>
          <Coupon/>
        </div>
        
                
       
       
      </div>
      </div>


        
      </div>
  );
};

export default Contacts;
