import { Link } from 'react-router-dom';
import { HiOutlineArrowRight } from 'react-icons/hi';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-links'>
        <ul>
          <li>
            <Link to='/about'>ABOUT</Link>
          </li>
          <li>
            <Link to='/contact'>CONTACT</Link>
          </li>
          <li>
            <a
              href='https://www.instagram.com/sommeslovi/'
              target='_blank'
              rel='noreferrer'
            >
              INSTAGRAM
            </a>
          </li>
          <li>
            <a
              href='https://www.facebook.com/sommeslovi/'
              target='_blank'
              rel='noreferrer'
            >
              FACEBOOK
            </a>
          </li>
          <li>
            <Link to='/policies/terms-of-service'>TERMS OF SERVICE</Link>
          </li>
          <li>
            <Link to='/policies/refund-policy'>RETURN & REFUND POLICY</Link>
          </li>
          <li>
            <Link to='/policies/privacy-policy'>PRIVACY POLICY</Link>
          </li>
          <li>
            <Link to='/policies/shipping-policy'>SHIPPING POLICY</Link>
          </li>
        </ul>
      </div>
      <div className='subscription'>
        <p className='text-bold'>SUBSCRIBE TO OUR NEWSLETTER</p>
        <p className='subs-info'>
          GET EXCLUSIVE EARLY ACCESS TO OUR SALES, NEW ARRIVALS, AND PROMOTIONS.
        </p>
        <input type='email' className='email-field' placeholder='Enter email' />
        <HiOutlineArrowRight className='arrow' />
      </div>
      <div className='company-tag'>© 2022 SOMME SLOVI.</div>
    </div>
  );
}

export default Footer;
