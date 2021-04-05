import { isFetchingActions } from "../store/reducers/isFetchingSlice";
import { postsActions } from "../store/reducers/postsSlice";
import { store } from "../store/store";
import { fetchData } from "./fetchData";
import { getFromLS } from "./localStorage";

export const loadInitialData = (pageId) => {
  fetchData(pageId).then(dataFetched => {
    store.dispatch(postsActions.retrievePosts(dataFetched));
    store.dispatch(postsActions.uppendPosts(getFromLS()));
    store.dispatch(isFetchingActions.setFetch(false));
  });
  store.dispatch(isFetchingActions.setFetch(true));
}