import { useSelector } from 'react-redux';
import { isFetchingSelector } from '../../features/allPosts/isFetchingSelector';
import './SmallArticle.scss';

export const SmallArticle = (props) => {
  const isFetching = useSelector(isFetchingSelector);
  const data = props.data;
  const id = props.id;
  const imgSrc = isFetching ? '' : `https://picsum.photos/300/150?sig=${id}`;
 
  return (
    <div className='small-article'>
      <div className='small-article__wrapper'>
        <div className='small-article__img-wrapper'>
          <img 
            className='small-article__img' 
            src={imgSrc}
          />
        </div>
        <h2 className='small-article__header'>
          {data.title}
        </h2>
      </div>
    </div>
  )
}