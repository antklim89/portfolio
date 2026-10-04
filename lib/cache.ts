import { cacheLife, cacheTag, revalidateTag } from 'next/cache';

const CACHE_TAG = 'MAIN';

export function createMainCache() {
  cacheTag(CACHE_TAG);
  cacheLife('max');
  cacheLife(
    process.env.BUILD === 'true'
      ? { expire: 0, revalidate: 0, stale: 0 }
      : { expire: 31536000, revalidate: 2592000, stale: 300 },
  );
}

export function revalidateMainCache() {
  revalidateTag(CACHE_TAG, { expire: 0 });
}
