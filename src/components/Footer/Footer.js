import './Footer.scss';

export const Footer = (props) => {
  return (
    <footer className='footer'>
      <div className='container footer__container'>
        <a href='#' className='footer__logo'>Blog</a>
        <ul className='footer__list'>
          <li className='footer__item'>
            <a href='#' className='footer__link'>Twitter</a>
          </li>
          <li className='footer__item'>
            <a href='#' className='footer__link'>LinkedIn</a>
          </li>
          <li className='footer__item'>
            <a href='#' className='footer__link'>RSS</a>
          </li>
        </ul>
        <p className='footer__copyrights'>
          © 2012–2020 Blog Co. 
          <br />
          All rights reserved. 
        </p>
      </div>
    </footer>
  )
}