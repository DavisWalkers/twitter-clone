import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadPosts } from '../../features/actions';

export const ButtonMore = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  
  const handleClick = () => {
    setPage(page + 1);
    dispatch(loadPosts(page));
  };

  return (
    <button 
      className='button' 
      onClick={handleClick} 
      data-page={page}
      type='button'
    >
      More Posts
    </button>
  );
};
