import { useSelector } from 'react-redux';
import { SmallArticle } from '../SmallArticle/SmallArticle';
import { postsSelector } from '../../store/selectors/postsSelector';
import { myPostsSelector } from '../../store/selectors/myPostsSelector';
import './ArticlesLayout.scss';

export const ArticlesLayout = (props) => {
  const isAll = (props.isAll === 'true');
  const allPosts = useSelector(postsSelector).slice(1);
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