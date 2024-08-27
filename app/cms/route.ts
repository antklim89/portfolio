import fs from 'node:fs';
import path from 'node:path';
import { cmsConfig } from '~/cms';

export async function GET() {
  const decapCmsSrc = path.resolve('./node_modules/decap-cms/dist/decap-cms.js');
  const decapCmsJs = await fs.promises.readFile(decapCmsSrc, 'utf8');

  try {
    return new Response(
      `
  <!doctype html>
  <html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Content Manager</title>
  </head>
  <body>
    <script>window.CMS_MANUAL_INIT = true;</script>
    <script>${decapCmsJs}</script>
    <script>window.initCMS( ${JSON.stringify(cmsConfig)} );</script>
  </body>
  </html>
  `,
      { headers: { 'content-type': 'text/html' } },
    );
  } catch (error) {
    console.log('🚀 ~ error: \n', error)
    
  }
}

export const dynamic = 'force-static';
