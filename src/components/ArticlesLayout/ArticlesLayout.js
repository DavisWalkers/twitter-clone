import { useSelector } from 'react-redux';
import { SmallArticle } from '../SmallArticle/SmallArticle';
import { allPostsSelector } from '../../features/allPosts/allPostsSelector';
import { myPostsSelector } from '../../features/allPosts/myPostsSelector';
import './ArticlesLayout.scss';

export const ArticlesLayout = (props) => {
  const isAll = (props.isAll === 'true');
  const allPosts = useSelector(allPostsSelector).slice(1);
  const myPosts = useSelector(myPostsSelector);
  const posts = isAll ? allPosts : myPosts;

  return (
    <div className='articles-layout'>
      {posts.map((value, index) => {
        return <SmallArticle key={index} id={value.id} data={value} />
      })}
    </div>
  );
};