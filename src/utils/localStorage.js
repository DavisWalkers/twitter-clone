const PAGE = 'my-posts';

const addToLS = (posts) => {
  localStorage.setItem(PAGE, JSON.stringify(posts));
};

const getFromLS = () => {
  return JSON.parse(localStorage.getItem(PAGE));
};

const deleteLS = () => {
  localStorage.removeItem(PAGE);
};

const deleteItemFromLS = (id) => {
  const posts = getFromLS();
  const newPosts = posts.filter(post => {
    return post.id !== id;
  });
  deleteLS();
  addToLS(newPosts);
}

const updateLS = (post) => {
  const posts = getFromLS();
  deleteLS();
  posts.push(post);
  addToLS(posts);
};

const setLS = () => {
  localStorage.setItem(PAGE, JSON.stringify([]));
};

export {
  addToLS,
  getFromLS,
  deleteLS,
  updateLS,
  setLS,
  deleteItemFromLS
};
