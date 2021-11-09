import path from 'path';

import sharp from 'sharp';

import { BlurData } from '~/types';


type DataWithImage<K extends string> = Record<K, string>;


export function getBlurData<K extends string, T extends DataWithImage<K>>(
    data: T,
    imageKey: K,
): Promise<BlurData<T>>;


export function getBlurData<K extends string, T extends DataWithImage<K>>(
    data: T[],
    imageKey: K,
): Promise<BlurData<T>[]>;

export function getBlurData<K extends string, T extends DataWithImage<K>>(
    data: T | T[],
    imageKey: K,
): Promise<BlurData<T>> | Promise<BlurData<T>[]> {

    const transform = async (project: T): Promise<BlurData<T>> => {
        const image = path.join(process.cwd(), 'public', project[imageKey]);
        const imageBuffer = await sharp(image)
            .resize(64, 64)
            .blur(5)
            .webp()
            .toBuffer();

        const blurData = `data:image/webp;base64, ${imageBuffer.toString('base64')}`;

        return { ...project, blurData };
    };

    if (Array.isArray(data)) return Promise.all(data.map(transform));
    return transform(data);
}
