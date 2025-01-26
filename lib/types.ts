import type { SerializedEditorState, SerializedLexicalNode } from '@payloadcms/richtext-lexical/lexical';
import type { Locale } from '@/lib/constants';
import type EnLocale from '@/lib/locales/en.json';


export interface TechnologyType {
  id: number;
  title: string;
  link: string;
  body: SerializedEditorState<SerializedLexicalNode>;
  imageUrl: string;
  blurDataURL: string;
}

export interface ProjectType {
  id: number;
  body: SerializedEditorState<SerializedLexicalNode>;
  title: string;
  link: string;
  github: string;
  technologies: string[];
  imageUrl: string;
  blurDataURL: string;
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
export type Translation = typeof EnLocale;
