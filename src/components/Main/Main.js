import { Articles } from '../Articles/Articles';
import {
  Switch,
  Route
} from 'react-router-dom';
import { PostPage } from '../PostPage/PostPage';

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
        </Switch>
    </main>
  )
}