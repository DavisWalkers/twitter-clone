import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { isFetchingSelector } from '../../store/selectors/isFetchingSelector';
import { Loader } from '../Loader/Loader';
import './SmallArticle.scss';

export const SmallArticle = (props) => {
  const data = props.data;
  const id = props.id;
  const isFetching = useSelector(isFetchingSelector);
  const isUserPost = id >= 10000;
  const url = `/post?${id}`;
 
  return (
    <div className='small-article'>
      <Link to={url}>
        <div className='small-article__wrapper'>
          <div className='small-article__img-wrapper'>
            {!!isFetching && <Loader />}
            {!isFetching && 
              <img 
                className='small-article__img'
                src={data.img}
                alt='Post visual content'
              />}
          </div>
          <h2 className='small-article__header'>
            {data.title}
          </h2>
          {!!isUserPost && 
            <div className='small-article__my-post'>My post</div>}
        </div>
      </Link>
    </div>
  );
};
