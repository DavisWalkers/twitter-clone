import { SmallArticle } from '../SmallArticle/SmallArticle';
import './ArticlesLayout.scss';

export const ArticlesLayout = (props) => {
  return (
    <div className='articles-layout'>
      <SmallArticle />
      <SmallArticle />
      <SmallArticle />
      <SmallArticle />
    </div>
  )
}