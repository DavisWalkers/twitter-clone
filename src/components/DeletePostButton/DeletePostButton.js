import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { removePost } from '../../features/actions';
import { deleteItemFromLS } from '../../utils/localStorage';

export const DeletePostButton = (props) => {
  const id = props.id;
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    if (window.confirm('Are you sure?')) {
      dispatch(removePost(id));
      deleteItemFromLS(id);
      history.push('/');
    } 
  };
  
  return (
    <button type='button' onClick={handleClick} className='button'>
      Delete post
    </button>
  );
};
