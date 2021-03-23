import { useSelector } from 'react-redux';
import { allPostsSelector } from '../../features/allPosts/allPostsSelector';
import './BigArticle.scss';

export const BigArticle = () => {
  const posts = useSelector(allPostsSelector);
  const bigPost = posts[0];
  
  return (
    <div className='big-article'>
      <div className='big-article__wrapper'>
        <div className='big-article__img-wrapper'>
          <img 
            className='big-article__img'
            src='https://picsum.photos/300'
          />
        </div>
        <h2 className='big-article__header'>
          {bigPost.title}
        </h2>
        <p className='big-article__description'>
          {bigPost.body}
        </p>
        <hr className='big-article__separator' />
      </div>
    </div>
  );
};
