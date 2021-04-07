import { NavLink } from 'react-router-dom';
import './Footer.scss';

export const Footer = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className='footer'>
      <div className='container footer__container'>
        <NavLink onClick={handleClick} to='/' className='footer__logo'>Blog</NavLink>
        <ul className='footer__list'>
          <li className='footer__item'>
            <a 
              href='https://twitter.com' 
              rel='noreferrer' 
              target='_blank' 
              className='footer__link'
            >
              Twitter
            </a>
          </li>
          <li className='footer__item'>
            <a 
              href='https://web.telegram.org' 
              target='_blank' 
              className='footer__link'
              rel='noreferrer'
            >
              Telegram
            </a>
          </li>
        </ul>
        <p className='footer__copyrights'>
          © 2021 Blog Co. 
          <br />
          All rights reserved. 
        </p>
      </div>
    </footer>
  );
};