import path from 'path';

import sharp from 'sharp';


export function getBlurData<K extends string, T extends Record<K, string>>(
    data: T[],
    imageKey: K,
): Promise<(T & { blurData: string; })[]> {

    return Promise.all(data.map(async (project) => {
        const image = path.join(process.cwd(), 'public', project[imageKey]);
        const imageBuffer = await sharp(image)
            .resize(64, 64)
            .blur(5)
            .jpeg()
            .toBuffer();

        const blurData = `data:image/jpeg;base64, ${imageBuffer.toString('base64')}`;

        return { ...project, blurData };
    }));
}
