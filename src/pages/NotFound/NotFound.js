import { Link } from 'react-router-dom';
import './NotFound.scss';

export const NotFound = () => {
  return (
    <section className='not-found'>
      <div className='container not-found__container'>
        <h1 className='not-found__header'>Not Found</h1>
        <p className='not-found__description'>Something went wrong</p>
        <Link to='/' className='button not-found__button'>Return to Home</Link>
      </div>
    </section>
  );
};