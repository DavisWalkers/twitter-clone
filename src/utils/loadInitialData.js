import { isFetchingActions } from "../redux/slices/isFetchingSlice";
import { postsActions } from "../redux/slices/postsSlice";
import { store } from "../redux/store";
import { fetchData } from "./fetchData";
import { getFromLS } from "./localStorage";

export const loadInitialData = (pageId) => {
  fetchData(pageId).then(dataFetched => {
    store.dispatch(postsActions.retrievePosts(dataFetched));
    store.dispatch(postsActions.uppendPosts(getFromLS()));
    store.dispatch(isFetchingActions.setFetch(false));
  });
  store.dispatch(isFetchingActions.setFetch(true));
};