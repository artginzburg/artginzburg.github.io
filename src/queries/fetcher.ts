export const fetcher = (url: string) => fetch(url).then((response) => (response.ok ? response.json() : Promise.reject(response)));
