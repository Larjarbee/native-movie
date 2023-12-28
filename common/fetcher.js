export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const baseUrl = 'https://api.themoviedb.org/3';
