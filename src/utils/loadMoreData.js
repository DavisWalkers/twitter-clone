import { isLoadingMoreActions } from "../store/reducers/isLoadingMoreSlice";
import { postsActions } from "../store/reducers/postsSlice";
import { store } from "../store/store";
import { fetchData } from "./fetchData";

export const loadMoreData = (pageId) => {
  fetchData(pageId).then(dataFetched => {
    store.dispatch(postsActions.uppendPosts(dataFetched));
    store.dispatch(isLoadingMoreActions.setLoading(true));
  });
  isLoadingMoreActions.setLoading(true);
}