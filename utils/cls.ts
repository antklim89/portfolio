export function cls(...classes: Array<string | undefined | false | null>): string {
  return classes.reduce<string>((acc, item): string => {
    if (typeof item === 'string' && item.trim().length > 0) return `${acc} ${item}`;
    return acc;
  }, '');
}
