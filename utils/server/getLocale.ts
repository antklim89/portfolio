import { z, ZodType } from 'zod';


export const getLocale = <T extends ZodType<unknown>>(data: unknown, schema: T, locale: string): z.infer<T> => {
    const record = z.record(z.record(z.unknown())).parse(data);
    const project = { ...record.en, ...record[locale] };

    const result = schema.parse(project);
    return result;
};
