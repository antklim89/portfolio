import type { SerializedEditorState, SerializedLexicalNode } from '@payloadcms/richtext-lexical/lexical';
import type { PaginatedDocs } from 'payload';
import type { Locale } from '@/lib/constants';
import type EnLocale from '@/lib/locales/en.json';
import type RuLocale from '@/lib/locales/ru.json';


interface ImageType {
  blurDataURL: string;
  width: number;
  height: number;
  filename: string;
  url: string;
}

export interface TechnologyType {
  id: number;
  title: string;
  link: string;
  body: SerializedEditorState<SerializedLexicalNode>;
  image: ImageType;
}

export interface ProjectType {
  id: number;
  body: SerializedEditorState<SerializedLexicalNode>;
  title: string;
  link: string;
  repository: string;
  technologies: string[];
  image: ImageType;
}

export interface AboutType {
  id: number;
  name: string;
  profession: string;
  slogan: string;
  description: SerializedEditorState<SerializedLexicalNode>;
}

export interface SeoType {
  id: number;
  author: string;
  keywords: string[];
  description: string;
  title: string;
}

export type LocaleType = keyof typeof Locale;
export type DefaultTranslation = typeof EnLocale;
export type RuTranslation = typeof RuLocale;

function assert<_ extends never>() {}
type TypeEqualityGuard<A, B> = Exclude<A, B> | Exclude<B, A>;
assert<TypeEqualityGuard<DefaultTranslation, RuTranslation>>();

export type Populated<T, K extends keyof T> = {
  [P in keyof T]: P extends K ? Extract<T[P], object> : T[P];
};
export type PopulatedPaginatedDocs<T extends PaginatedDocs, K extends keyof T['docs'][number]> = PaginatedDocs<Populated<T['docs'][number], K>>;
