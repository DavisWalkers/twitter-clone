import { Formik } from 'formik';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory, useParams } from 'react-router';
import TextareaAutosize from 'react-textarea-autosize';
import { postsSelector } from '../../store/selectors/postsSelector';
import { createPostObjects } from '../../utils/createPostObject';
import { updateLS } from '../../utils/localStorage';
import * as yup from 'yup';
import './EditPost.scss';
import { postsActions } from '../../store/reducers/postsSlice';
import { store as notificationStore } from 'react-notifications-component';

export const EditPost = () => {
  const params = useParams();
  const id = parseInt(params['id']);
  const post = useSelector(postsSelector).filter(post => { 
    return post.id === id;
  })[0];
  const dispatch = useDispatch();
  const history = useHistory();

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

    dispatch(postsActions.updatePost(post));
    updateLS(post);
    history.push('/my-posts');

    notificationStore.addNotification({
      title: "Successfully",
      message: "Post edited!",
      type: "success",
      insert: "top",
      container: "top-left",
      dismiss: {
        duration: 3000,
        onScreen: false
      }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <section className='edit-post'>
      <div className='container edit-post__container'>
        <h1 className='edit-post__header'>Edit post</h1>
        {!!post && 
          <Formik 
            initialValues={{ title: post.title, body: post.body }}
            validationSchema={formSchema}
            onSubmit={values => {
              updatePostObject({ title: values.title, body: values.body });
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
