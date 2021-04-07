export function createPostObjects(id, title, body) {
  return {
    id,
    title,
    body,
    img: `https://picsum.photos/500/800?sig=${id}`
  };
};