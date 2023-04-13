export const htmlFetcher = (url: string) => fetch(url).then((response) => (response.ok ? response.text() : Promise.reject(response)));
