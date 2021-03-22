import './Header.scss';

export const Header = (props) => {
  return (
    <header className='header'>
      <div className='container header__container'>
        <nav className='header__nav'>
          <a href='#' className='header__link header__link--active'>Blog</a>
          {/* <a href='#' className='header__link'>About</a>
          <a href='#' className='header__link'>Links</a> */}
          <a href='#' className='header__link'>Write</a>
        </nav>
      </div>
    </header>
  )
}