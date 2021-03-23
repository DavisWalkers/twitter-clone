import { useSelector } from 'react-redux';
import { SmallArticle } from '../SmallArticle/SmallArticle';
import { allPostsSelector } from '../../features/allPosts/allPostsSelector';
import './ArticlesLayout.scss';

export const ArticlesLayout = () => {
  const allPosts = useSelector(allPostsSelector).slice(1);

  return (
    <div className='articles-layout'>
      {allPosts.map((value, index) => {
        return <SmallArticle key={index} id={index} data={value} />
      })}
    </div>
  );
};