import './Articles.scss';
import { BigArticle } from '../BigArticle/BigArticle';
import { ArticlesLayout } from '../ArticlesLayout/ArticlesLayout';
import { useEffect, useState } from 'react';
import { LoadMore } from '../LoadMore/LoadMore';
import { loadMoreData } from '../../utils/loadMoreData';

export const Articles = () => {
  const [pageNumber, setPageNumber] = useState(2);

  const setObserver = (observer, ref) => {
    observer.observe(ref);
  };

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
  };
  
  const callback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio === 1) {
        setPageNumber((prevNumber) => prevNumber + 1);
      }
    });
  };
  
  const observer = new IntersectionObserver(callback, options);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  useEffect(() => {
    loadMoreData(pageNumber);
  }, [pageNumber])

  return (
    <section className='articles'>
      <div className='container articles__container'>
        <BigArticle />
        <p className='articles__header'>All articles</p>
        <ArticlesLayout isAll='true' />
        <div className='articles__button-wrapper'>
          <LoadMore setObserver={setObserver} observer={observer} />
        </div>
      </div>
    </section>
  );
};