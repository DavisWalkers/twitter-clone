import './SmallArticle.scss';

export const SmallArticle = (props) => {
  return (
    <div className='small-article'>
      <div className='small-article__wrapper'>
        <img className='small-article__img' height='150' src='https://wallpaperaccess.com/full/2435550.png' />
        <h2 className='small-article__header'>Here are some things you should know regarding how we work</h2>
      </div>
    </div>
  )
}