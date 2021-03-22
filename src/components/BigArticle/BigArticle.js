import './BigArticle.scss';

export const BigArticle = (props) => {
  return (
    <div className='big-article'>
      <div className='big-article__wrapper'>
        <img className='big-article__img' width='600' src='https://img.wallpapersafari.com/desktop/1440/900/85/20/ynq9QB.jpg' />
        <h2 className='big-article__header'>A few words about this blog platform, Ghost, and how this site was made</h2>
        <p className='big-article__description'>Why Ghost (& Figma) instead of Medium, WordPress or other options?</p>
        <hr className='big-article__separator' />
      </div>
    </div>
  );
}