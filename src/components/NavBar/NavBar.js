import './NavBar.scss';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className='nav-bar'>
      <ul className='nav-bar__list'>
        <li className='nav-bar__item'>
          <NavLink exact to='/' activeClassName='nav-bar__link--active' className='nav-bar__link'>
            Blog
          </NavLink>
        </li>
        <li className='nav-bar__item'>
          <NavLink to='/write' activeClassName='nav-bar__link--active' className='nav-bar__link'>
              Write
          </NavLink>
        </li>
        <li className='nav-bar__item'>
          <NavLink to='/my-posts' activeClassName='nav-bar__link--active' className='nav-bar__link'>
              My Posts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
