import { BigArticle } from '../BigArticle/BigArticle';
import { ArticlesLayout } from '../ArticlesLayout/ArticlesLayout';
import './Articles.scss';

export const Articles = () => {
  return (
    <section className='articles'>
      <div className='container articles__container'>
        <BigArticle />
        <p className='articles__header'>All articles</p>
        <ArticlesLayout />
      </div>
    </section>
  );
};