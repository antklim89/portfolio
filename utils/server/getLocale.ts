import { type ZodType, z } from 'zod';

export const getLocale = <T extends ZodType<unknown>>(data: unknown, locale: string): z.infer<T> => {
    const record = z.record(z.record(z.unknown())).parse(data);

    return { ...record.en, ...record[locale] };
};
