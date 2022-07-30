const getAssetsURL = (path) => {
  // console.log(import.meta);
  // console.log(new URL(`../assets/img/${path}`, import.meta.url));
  return new URL(`../assets/img/${path}`, import.meta.url).href;
};

export { getAssetsURL };
