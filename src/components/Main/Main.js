import { Articles } from '../Articles/Articles';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

const Post = () => {
  return (
    <div style={{height: '1000px'}}>
      <h1>Hello</h1>
    </div>
  );
};

export const Main = () => {
  return (
    <main className='main'>
        <Switch>
          <Route exact path='/'>
            <Articles />
          </Route>
          <Route path='/post'>
            <Post />
          </Route>
        </Switch>
    </main>
  )
}