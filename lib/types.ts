import type { z } from 'zod';
import type { aboutSchema, projectSchema, technologySchema } from './schemas';
import type { Locale } from '@/lib/constants';
import type EnLocale from '@/lib/locales/en.json';


export type TechnologyType = z.infer<typeof technologySchema>;

export type ProjectType = z.infer<typeof projectSchema>;

export type AboutType = z.infer<typeof aboutSchema>;

export type LocaleType = keyof typeof Locale;

export type Translation = typeof EnLocale;