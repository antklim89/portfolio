import { cacheLife, cacheTag, revalidateTag } from 'next/cache';

const CACHE_TAG = 'MAIN';

export function createMainCache() {
  cacheTag(CACHE_TAG);
  cacheLife('max');
}

export function revalidateMainCache() {
  revalidateTag(CACHE_TAG, 'max');
}
