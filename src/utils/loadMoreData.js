import { isLoadingMoreActions } from "../redux/slices/isLoadingMoreSlice";
import { postsActions } from "../redux/slices/postsSlice";
import { store } from "../redux/store";
import { fetchData } from "./fetchData";

export const loadMoreData = (pageId) => {
  fetchData(pageId).then(dataFetched => {
    store.dispatch(postsActions.uppendPosts(dataFetched));
    store.dispatch(isLoadingMoreActions.setLoading(true));
  });
  isLoadingMoreActions.setLoading(true);
}