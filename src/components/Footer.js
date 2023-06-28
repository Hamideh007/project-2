import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <video src={'/videos/vd.mp4'} autoPlay loop muted />
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Me</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Me</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
  <h2>Social Media</h2>
  <a href='https://www.linkedin.com/in/mahtab-rahmani-97b9b772' target='_blank' rel='noopener noreferrer'>
    LinkedIn
  </a>
  <a href='https://github.com/Hamideh007' target='_blank' rel='noopener noreferrer'>
    GitHub
  </a>
  <a href='https://www.instagram.com/rahmani.mahtab/' target='_blank' rel='noopener noreferrer'>
    Instagram
  </a>
  <a href='https://twitter.com/mahtabmara?s=21&t=jKt9116uiMuCjQOMRLBZuw' target='_blank' rel='noopener noreferrer'>
    Twitter
  </a>
</div>
</div>
</div>
<section class='social-media'>
  <div class='social-media-wrap'>
    <div class='footer-logo'>
      <Link to='/' className='social-logo'>
        Moonlit Scapes
        <i className='fab fa-typo3' />
      </Link>
    </div>
    <small className='website-rights'>Moonlit Scapes © 2023</small>
    <div className='social-icons'>
      <a
        href='https://www.linkedin.com/in/mahtab-rahmani-97b9b772'
        target='_blank'
        rel='noopener noreferrer'
      >
        <i className='fa fa-linkedin-square'></i>
      </a>
      <a
        href='https://www.instagram.com/rahmani.mahtab/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <i className='fa fa-instagram'></i>
      </a>
      <a
        href='https://twitter.com/mahtabmara?s=21&t=jKt9116uiMuCjQOMRLBZuw'
        target='_blank'
        rel='noopener noreferrer'
      >
        <i className='fa fa-twitter'></i>
      </a>
      <a
        href='https://github.com/Hamideh007'
        target='_blank'
        rel='noopener noreferrer'
      >
        <i className='fa fa-github-square'></i>
      </a>
    </div>
  </div>
</section>
</div>
);
}

export default Footer;
