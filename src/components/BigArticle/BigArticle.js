import { useSelector } from 'react-redux';
import { allPostsSelector } from '../../features/allPosts/allPostsSelector';
import { isFetchingSelector } from '../../features/allPosts/isFetchingSelector';
import './BigArticle.scss';

export const BigArticle = () => {
  const isFetching = useSelector(isFetchingSelector);
  const posts = useSelector(allPostsSelector);
  const bigPost = isFetching ? {id: 0, title: 'Fetching', body: 'Fetching'} : posts[0];
  
  return (
    <div className='big-article'>
      <div className='big-article__wrapper'>
        <div className='big-article__img-wrapper'>
          <img 
            className='big-article__img' 
            // width='600'  
            src='https://picsum.photos/600'
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
