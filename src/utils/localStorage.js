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
};

const uppendLS = (post) => {
  const posts = getFromLS();
  deleteLS();
  posts.push(post);
  addToLS(posts);
};

const setLS = () => {
  localStorage.setItem(PAGE, JSON.stringify([]));
};

const updateLS = (post) => {
  const posts = getFromLS();
  deleteLS();
  const newPosts = posts.map(element => {
    if (element.id === post.id) {
      return post;
    } else {
      return element;
    }
  });
  addToLS(newPosts);
};

export {
  addToLS,
  getFromLS,
  deleteLS,
  uppendLS,
  setLS,
  deleteItemFromLS,
  updateLS
};