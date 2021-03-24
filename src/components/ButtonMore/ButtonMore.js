import { useDispatch, useSelector } from 'react-redux';
import { loadPosts } from '../../features/actions';
import { allPostsSelector } from '../../features/allPosts/allPostsSelector';
import './ButtonMore.scss';

export const ButtonMore = () => {
  const dispatch = useDispatch();
  const allPosts = useSelector(allPostsSelector);

  const updateDataPage = (e) => {
    const btn = e.target;
    const newPage = parseInt(btn.dataset.page) + 1;
    btn.dataset.page = newPage;
    return newPage;
  };
  
  return (
    <button 
      className='button-more' 
      onClick={(e) => {
        const newPage = updateDataPage(e);
        dispatch(loadPosts(newPage));
      }} 
      data-page='1' 
      type='button'
    >
      More Posts
    </button>
  );
};
