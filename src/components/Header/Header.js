import { NavLink } from 'react-router-dom';
import './Header.scss';

export const Header = () => {
  return (
      <header className='header'>
        <div className='container header__container'>
          <nav className='header__nav'>
            <ul className='header__list'>
              <li className='header__item'>
                <NavLink exact to='/' activeClassName='header__link--active' className='header__link'>
                  Blog
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
  );
};