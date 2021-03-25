import { useDispatch, useSelector, useStore } from 'react-redux';
import TextareaAutosize from 'react-textarea-autosize';
import { addMyPost, addPost } from '../../features/actions';
import { allPostsSelector } from '../../features/allPosts/allPostsSelector';
import { createPostObjects } from '../../utils/createPostObject';
import { extractFormParams } from '../../utils/extractFormParams';
import './Write.scss';

export const Write = () => {
  const dispatch = useDispatch();
  const store = useStore();
  const allPosts = useSelector(allPostsSelector);

  const activatePopup = () => {
    const popup = document.querySelector('.write__popup');
    popup.style.display = 'flex';
  };

  const deactivatePopup = () => {
    const popup = document.querySelector('.write__popup');
    popup.style.display = 'none';
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = Math.floor(Math.random() * 10) + 10000;
    const { title, body } = extractFormParams(e.target);
    const post = createPostObjects(id, title, body);

    dispatch(addMyPost(post));
    dispatch(addPost(post));
    activatePopup();
    setTimeout(deactivatePopup, 5000);
    
  };

  return (
    <section className='write'>
      <div className='write__popup'>
        <p className='write__popup-text'>Successfully added</p>
      </div>
      <div className='container write__container'>
        <h1 className='write__header'>Tell us your thoughts</h1>
        <form onSubmit={handleSubmit} className='write__form'>
          <TextareaAutosize
            className='write__input'
            placeholder='Title'
            id='title'
            name='title'
            maxLength='300'
            required
          />
          <TextareaAutosize
            className='write__input'
            placeholder='Body'
            id='body'
            minRows='4'
            name='body'
            maxLength='3000'
            required
          />
          <button className='write__button' type='submit'>Post</button>
        </form>
      </div>
    </section>
  );
};
