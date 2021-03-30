import { Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useLocation } from 'react-router';
import TextareaAutosize from 'react-textarea-autosize';
import { updatePost } from '../../features/actions';
import { myPostsSelector } from '../../features/allPosts/myPostsSelector';
import { createPostObjects } from '../../utils/createPostObject';
import { updateLS } from '../../utils/localStorage';
import * as yup from 'yup';
import './EditPost.scss';
import { Popup } from '../Popup/Popup';

export const EditPost = () => {
  const [isVisiblePopup, setIsVisiblePopup] = useState(false);
  const id = parseInt(useLocation().search.slice(1).split('=')[1]);
  const post = useSelector(myPostsSelector).filter(post => {
    return post.id === id;
  })[0];

  const dispatch = useDispatch();

  const formSchema = yup.object().shape({
    title: yup.string()
      .trim()
      .min(1, 'Too Short')
      .max(300, 'Too Long')
      .required('Required'),
    body: yup.string()
      .trim()
      .min(1, 'Too Short')
      .max(3000, 'Too Long')
      .required('Required')
  });

  const updatePostObject = ({ title, body }) => {
    const post = createPostObjects(id, title, body);

    dispatch(updatePost(post));
    updateLS(post);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <section className='edit-post'>
      <Popup 
        text='Successfully edited'
        isVisible={isVisiblePopup}
        changeVisibility={setIsVisiblePopup}
      />
      <div className='container edit-post__container'>
        <h1 className='edit-post__header'>Edit post</h1>
        {!!post && 
          <Formik 
            initialValues={{ title: post.title, body: post.body }}
            validationSchema={formSchema}
            onSubmit={values => {
              updatePostObject({ title: values.title, body: values.body });
              setIsVisiblePopup(true);
            }}
          >
          {({
            values,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
          <form onSubmit={handleSubmit} className='edit-post__form'>
            {errors.title && 
              <div className='edit-post__error edit-post__error--title'>
                {errors.title}
              </div>}
            <TextareaAutosize
              className='edit-post__input'
              placeholder='Title'
              id='title'
              name='title'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            >
              {post.title}
            </TextareaAutosize>
            <TextareaAutosize
              className='edit-post__input'
              placeholder='Body'
              id='body'
              minRows='4'
              name='body'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.body}
            >
              {post.body}
            </TextareaAutosize>
            {errors.body && 
              <div className='edit-post__error edit-post__error--body'>
                {errors.body}
              </div>}
            <button 
              className='button edit-post__button' 
              type='submit' 
            >
              Submit
            </button>
          </form>)}
        </Formik>}
        {!post && <Redirect to='/' />}
      </div>
    </section>
  );
};
