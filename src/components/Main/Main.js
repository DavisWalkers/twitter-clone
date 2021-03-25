import { Articles } from '../Articles/Articles';
import {
  Switch,
  Route
} from 'react-router-dom';
import { PostPage } from '../PostPage/PostPage';
import { Write } from '../Write/Write';
import { MyPosts } from '../MyPosts/MyPosts';
import { NotFound } from '../NotFound/NotFound';
import { EditPost } from '../EditPost/EditPost';

export const Main = () => {
  return (
    <main className='main'>
        <Switch>
          <Route exact path='/'>
            <Articles />
          </Route>
          <Route path='/post'>
            <PostPage />
          </Route>
          <Route path='/write'>
            <Write />
          </Route>
          <Route path='/my-posts'>
            <MyPosts />
          </Route>
          <Route path='/edit-post'>
            <EditPost />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
    </main>
  );
};
