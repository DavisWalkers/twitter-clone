import './Articles.scss';
import { BigArticle } from '../BigArticle/BigArticle';
import { ArticlesLayout } from '../ArticlesLayout/ArticlesLayout';
import { ButtonMore } from '../ButtonMore/ButtonMore';
import { useEffect } from 'react';

export const Articles = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <section className='articles'>
      <div className='container articles__container'>
        <BigArticle />
        <p className='articles__header'>All articles</p>
        <ArticlesLayout isAll='true' />
        <div className='articles__button-wrapper'>
          <ButtonMore />
        </div>
      </div>
    </section>
  );
};