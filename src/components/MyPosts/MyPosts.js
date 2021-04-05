import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { myPostsSelector } from '../../store/selectors/myPostsSelector';
import { ArticlesLayout } from '../ArticlesLayout/ArticlesLayout';
import './MyPosts.scss';

export const MyPosts = () => {
  const myPostsLength = useSelector(myPostsSelector).length;

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
 
  return (
    <section className='my-posts'>
      <div className='container my-posts__container'>
        <h1 className='my-posts__header'>My Posts</h1>
        {(myPostsLength > 0) && <ArticlesLayout isAll='false' />}
        {(myPostsLength === 0) && 
          <p className='my-posts__description'>There is nothing...</p>}
      </div>
    </section>
  )
};
