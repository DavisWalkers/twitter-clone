import { NavBar } from '../NavBar/NavBar';
import './Header.scss';

export const Header = () => {
  return (
    <header className='header'>
      <div className='container header__container'>
        <NavBar />
      </div>
    </header>
  );
};
