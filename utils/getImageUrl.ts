export function getImageUrl(src: string): string {
    if (src.startsWith('http')) return src;
    return `${process.env.URL || ''}${src}`;
}
