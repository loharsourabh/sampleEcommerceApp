function makeUrl(baseUrl, query = {}) {
  let url = 'https://fakestoreapi.com' + baseUrl + '?';

  for (let param in query) {
    url += `${param}=${encodeURIComponent(query[param])}&`;
  }

  return url.slice(0, -1);
}

export function getProducts(query) {
  return makeUrl('/products', query);
}

// export function getSomething(query) {
//   return makeUrl('/someendpoint', query);
// }