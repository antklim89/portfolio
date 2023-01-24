import { Locale } from '~/constants';


export type Locale = keyof typeof Locale

export type Translation = typeof import('~/locales/en.json')
