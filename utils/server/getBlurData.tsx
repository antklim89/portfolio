import path from 'path';

import Jimp from 'jimp/es';

import { BlurData } from '~/types';


type DataWithImage<K extends string> = Record<K, string>;


const basePlaceholder = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAEALAAAAAABAAEAAAICTAEAOw==';

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
    const transform = async (transformData: T): Promise<BlurData<T>> => {
        const imagePath = path.join(process.cwd(), 'public', transformData[imageKey]);
        if (imagePath.endsWith('.svg')) return { ...transformData, blurData: basePlaceholder };
        const imageJimp = await Jimp.read(imagePath);
        const blurData = await imageJimp
            .resize(64, 64)
            .quality(80)
            .blur(2)
            .getBase64Async(Jimp.MIME_JPEG);

        return { ...transformData, blurData };
    };

    if (Array.isArray(data)) return Promise.all(data.map(transform));
    return transform(data);
}
