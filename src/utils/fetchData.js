export const fetchData = async (page) => {
  const response = await fetch(`https://gorest.co.in/public-api/posts?${page}`);
  const data = await response.json();
  const posts = data.data.map(element => {
    return {
      id: element.id,
      title: element.title,
      body: element.body,
      img: `https://picsum.photos/500/800?sig=${element.id}`
    } 
  });
  return posts;
};
