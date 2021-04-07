import { useEffect, useRef } from 'react';
import './LoadMore.scss';
import { Loader } from '../../../common/Loader/Loader';

export const LoadMore = (props) => {
  const setObserver = props.setObserver;
  const observer = props.observer;
  const ref = useRef();

  useEffect(() => {
    setObserver(observer, ref.current);
  }, []);

  return (
    <div ref={ref} className='load-more'>
      <Loader />
    </div>
  );
};