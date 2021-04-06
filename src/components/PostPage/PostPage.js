import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { postsSelector } from "../../store/selectors/postsSelector";
import { isFetchingSelector } from "../../store/selectors/isFetchingSelector";
import { DeletePostButton } from "../DeletePostButton/DeletePostButton";
import { Loader } from "../Loader/Loader";
import './PostPage.scss';


export const PostPage = () => {
  const allPosts = useSelector(postsSelector);
  const id = parseInt(useLocation().search.slice(1));
  const isFetching = useSelector(isFetchingSelector);
  const isUserPost = id >= 10000;
  const urlEdit = `/edit-post/${id}`;
  let currentPost = isFetching ? allPosts[0] : allPosts.filter(post => post.id === id)[0];

  if (!currentPost) {
    currentPost = { title: 'No such post', body: '', img: '' };
  }

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <section className='post'>
      <div className='container post__container'>
        <div className='post__img-wrapper'>
          {!!isFetching && <Loader />}
          {!isFetching && 
            <img
              className='post__img'
              src={currentPost.img}
              alt='Post visual content'
            />}
        </div>
        <h1 className='post__header'>
          {currentPost.title}
        </h1>
        <p className='post__description'>
          {currentPost.body}  
        </p>
        <hr className='post__separator' />
        {!!isUserPost && 
          <div className='post__buttons-wrapper'>
            <DeletePostButton id={id} />
            <div className='post__wrapper-separator'></div>
            <Link to={urlEdit} className='button'>Edit post</Link>
          </div>}
      </div>
    </section>
  );
};
