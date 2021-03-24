import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { allPostsSelector } from '../../features/allPosts/allPostsSelector';
import { isFetchingSelector } from '../../features/allPosts/isFetchingSelector';
import { Loader } from '../Loader/Loader';
import './BigArticle.scss';

export const BigArticle = () => {
  const isFetching = useSelector(isFetchingSelector);
  const posts = useSelector(allPostsSelector);
  const bigPost = posts[0];
  const url = `/post?${bigPost.id}`;
  
  return (
    <div className='big-article'>
      <Link to={url}>
        <div className='big-article__wrapper'>
            <div className='big-article__img-wrapper'>
              {!!isFetching && <Loader />}
              {!isFetching && <img 
                className='big-article__img'
                src={bigPost.img}
              />}
            </div>
            <h2 className='big-article__header'>
              {bigPost.title}
            </h2>
            <p className='big-article__description'>
              {bigPost.body}
            </p>
          <hr className='big-article__separator' />
        </div>
      </Link>
    </div>
  );
};
