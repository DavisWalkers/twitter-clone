import { useDispatch } from 'react-redux';
import { loadPosts } from '../../features/actions';
import './ButtonMore.scss';

export const ButtonMore = () => {
  const dispatch = useDispatch();

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
