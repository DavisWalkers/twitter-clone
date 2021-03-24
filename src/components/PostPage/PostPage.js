import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { allPostsSelector } from "../../features/allPosts/allPostsSelector";
import { isFetchingSelector } from "../../features/allPosts/isFetchingSelector";
import { Loader } from "../Loader/Loader";
import './PostPage.scss';


export const PostPage = () => {
  const allPosts = useSelector(allPostsSelector);
  const isFetching = useSelector(isFetchingSelector);
  const id = parseInt(useLocation().search.slice(1));
  const currentPost = isFetching ? allPosts[0] : allPosts.filter(post => post.id === id)[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth'});
  }, []);

  return (
    <section className='post'>
      <div className='container post__container'>
        <div className='post__img-wrapper'>
          {!!isFetching && <Loader />}
          {!isFetching && <img
            className='post__img'
            src={currentPost.img}
          />}
        </div>
        <h1 className='post__header'>
          {currentPost.title}
        </h1>
        <p className='post__description'>
          {currentPost.body}  
        </p>
      </div>
    </section>
  );
};
