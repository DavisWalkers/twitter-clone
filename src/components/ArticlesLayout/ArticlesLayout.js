import { useSelector } from 'react-redux';
import { SmallArticle } from '../SmallArticle/SmallArticle';
import { allPostsSelector } from '../../features/allPosts/allPostsSelector';
import { myPostsSelector } from '../../features/allPosts/myPostsSelector';
import './ArticlesLayout.scss';

export const ArticlesLayout = (props) => {
  const isAll = (props.isAll === 'true');
  const allPosts = useSelector(allPostsSelector).slice(1);
  const myPosts = useSelector(myPostsSelector);

  return (
    <div className='articles-layout'>
      {!!isAll && allPosts.map((value, index) => {
        return <SmallArticle key={index} id={value.id} data={value} />
      })}
      {!isAll && myPosts.map((value, index) => {
        return <SmallArticle key={index} id={value.id} data={value} />
      })}
    </div>
  );
};