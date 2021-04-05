import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { postsSelector } from '../../store/selectors/postsSelector';
import { isFetchingSelector } from '../../store/selectors/isFetchingSelector';
import { Loader } from '../Loader/Loader';
import './BigArticle.scss';

export const BigArticle = () => {
  const isFetching = useSelector(isFetchingSelector);
  const posts = useSelector(postsSelector);
  const bigPost = posts ? posts[0] : { title: '', body: '', id: 0 };
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
              alt='Post visual content'
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
