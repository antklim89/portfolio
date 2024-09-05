import { defaultLocale, locales } from '@/constants';
import type { LocaleType } from '@/types';


export function isCorrectLocale(locale: unknown): locale is LocaleType {
  if (typeof locale !== 'string') return false;
  return locales.includes(locale as LocaleType);
}

export function getCorrectLocale(locale: unknown): LocaleType {
  return isCorrectLocale(locale) ? locale : defaultLocale;
}

export function cls(...classes: Array<string | undefined | false | null>): string {
  return classes.reduce<string>((acc, item): string => {
    if (typeof item === 'string' && item.trim().length > 0) return `${acc} ${item}`;
    return acc;
  }, '');
}

export function getCookie(name: string, cookies?: string): string | null {
  if (cookies != null) return cookies.match(new RegExp(`(^| )${name}=([^;]+)`, 'i'))?.pop() ?? null;
  if (typeof window !== 'undefined')
    return document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`, 'i'))?.pop() ?? null;
  return null;
}

export function hasCookie(name: string): boolean {
  if (typeof window !== 'undefined') return new RegExp(`(^| )${name}=([^;]+)`, 'i').test(document.cookie);
  return false;
}

export function setCookie(name: string, value: string, days = 12): void {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = date.toUTCString();
  if (typeof window !== 'undefined') {
    document.cookie = `${name}=${value};path=/;expires=${expires}`;
  }
}

export function clearCookie(name: string): void {
  if (typeof window !== 'undefined') {
    document.cookie = `${name}=;path=/;expires=Thu, 01 Jan 1970 00:00:00 GMT;`;
  }
}
