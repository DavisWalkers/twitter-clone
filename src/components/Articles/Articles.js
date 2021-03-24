import { BigArticle } from '../BigArticle/BigArticle';
import { ArticlesLayout } from '../ArticlesLayout/ArticlesLayout';
import './Articles.scss';
import { ButtonMore } from '../ButtonMore/ButtonMore';

export const Articles = () => {
  return (
    <section className='articles'>
      <div className='container articles__container'>
        <BigArticle />
        <p className='articles__header'>All articles</p>
        <ArticlesLayout />
        <div className='articles__button-wrapper'>
          <ButtonMore />
        </div>
      </div>
    </section>
  );
};