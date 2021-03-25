import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory, useLocation } from 'react-router';
import TextareaAutosize from 'react-textarea-autosize';
import { updatePost } from '../../features/actions';
import { myPostsSelector } from '../../features/allPosts/myPostsSelector';
import { createPostObjects } from '../../utils/createPostObject';
import { extractFormParams } from '../../utils/extractFormParams';
import { updateLS } from '../../utils/localStorage';
import './EditPost.scss';

export const EditPost = () => {
  const history = useHistory();
  const id = parseInt(useLocation().search.slice(1).split('=')[1]);
  const post = useSelector(myPostsSelector).filter(post => {
    return post.id === id;
  })[0];

  if (!post) {
    history.push('/not-found');
  }

  const dispatch = useDispatch();

  const activatePopup = () => {
    const popup = document.querySelector('.edit-post__popup');
    popup.style.display = 'flex';
  };

  const deactivatePopup = () => {
    const popup = document.querySelector('.edit-post__popup');
    if (popup) {
      popup.style.display = 'none';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { title, body } = extractFormParams(e.target);
    const post = createPostObjects(id, title, body);

    dispatch(updatePost(post));
    activatePopup();
    setTimeout(deactivatePopup, 5000);
    updateLS(post);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className='edit-post'>
      <div className='edit-post__popup'>
        <p className='edit-post__popup-text'>Successfully edited</p>
      </div>
      <div className='container edit-post__container'>
        <h1 className='edit-post__header'>Edit post</h1>
        {!!post && <form onSubmit={handleSubmit} className='edit-post__form'>
          <TextareaAutosize
            className='edit-post__input'
            placeholder='Title'
            id='title'
            name='title'
            maxLength='300'
            required
          >
            {post.title}
          </TextareaAutosize>
          <TextareaAutosize
            className='edit-post__input'
            placeholder='Body'
            id='body'
            minRows='4'
            name='body'
            maxLength='3000'
            required
          >
            {post.body}
          </TextareaAutosize>
          <button className='button edit-post__button' type='submit'>Submit</button>
        </form>}
        {!post && <Redirect to='/' />}
      </div>
    </section>
  );
};
