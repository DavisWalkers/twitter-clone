import { Articles } from '../../pages/Articles/Articles';
import {
  Switch,
  Route
} from 'react-router-dom';
import { PostPage } from '../../pages/PostPage/PostPage';
import { Write } from '../../pages/Write/Write';
import { MyPosts } from '../../pages/MyPosts/MyPosts';
import { NotFound } from '../../pages/NotFound/NotFound';
import { EditPost } from '../../pages/EditPost/EditPost';
import { ButtonScrollTop } from '../ButtonScrollTop/ButtonScrollTop';

export const Main = () => {
  return (
    <main className='main'>
      <Switch>
        <Route exact path='/'>
          <Articles />
        </Route>
        <Route path='/post/:id'>
          <PostPage />
        </Route>
        <Route path='/write'>
          <Write />
        </Route>
        <Route path='/my-posts'>
          <MyPosts />
        </Route>
        <Route path='/edit-post/:id'>
          <EditPost />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
      <ButtonScrollTop />
    </main>
  );
};
