import './Write.scss';
import { useDispatch } from 'react-redux';
import TextareaAutosize from 'react-textarea-autosize';
import { addMyPost, addPost } from '../../features/actions';
import { createPostObjects } from '../../utils/createPostObject';
import { uppendLS } from '../../utils/localStorage';
import { Formik } from 'formik';
import * as yup from 'yup';

export const Write = () => {
  const dispatch = useDispatch();

  const activatePopup = () => {
    const popup = document.querySelector('.write__popup');
    popup.style.display = 'flex';
  };

  const deactivatePopup = () => {
    const popup = document.querySelector('.write__popup');
    if (popup) {
      popup.style.display = 'none';
    }
  };

  const createPost = ({ title, body }) => {
    const id = Math.floor(Math.random() * 1000000) + 10000;
    const post = createPostObjects(id, title, body);

    dispatch(addMyPost(post));
    dispatch(addPost(post));
    uppendLS(post);
    activatePopup();
    setTimeout(deactivatePopup, 5000);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

  return (
    <section className='write'>
      <div className='write__popup'>
        <p className='write__popup-text'>Successfully added</p>
      </div>
      <div className='container write__container'>
        <h1 className='write__header'>Tell us your thoughts</h1>
        <Formik 
          initialValues={{ title: '', body: '' }}
          validationSchema={formSchema}
          onSubmit={(values, { resetForm }) => {
            createPost({ title: values.title, body: values.body });
            values = { title: '', body: '' };
            resetForm({});
          }}
        >
          {({
         values,
         errors,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
       }) => (
          <form onSubmit={handleSubmit} className='write__form'>
            {errors.title && <div className='write__error write__error--title'>
                {errors.title}
              </div>}
            <TextareaAutosize
              className='write__input'
              placeholder='Title'
              id='title'
              name='title'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            <TextareaAutosize
              className='write__input'
              placeholder='Body'
              minRows='4'
              id='body'
              name='body'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.body}
            />
            {errors.body && <div className='write__error write__error--body'>
                {errors.body}
              </div>}
            <button className='button write__button' type='submit' disabled={isSubmitting}>Post</button>
          </form>)}
        </Formik>
      </div>
    </section>
  );
};
