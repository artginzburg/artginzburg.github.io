const cacheKey = 'app-cache';

export function localStorageProvider<K, V>() {
  // When initializing, we restore the data from `localStorage` into a map.
  const map = new Map<K, V>(JSON.parse(localStorage.getItem(cacheKey) || '[]'));

  // Before unloading the app, we write back all the data into `localStorage`.
  window.addEventListener('beforeunload', () => {
    const appCache = JSON.stringify(Array.from(map.entries()));
    localStorage.setItem(cacheKey, appCache);
  });

  // We still use the map for write & read for performance.
  return map;
}
