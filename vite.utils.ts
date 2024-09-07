import { fileURLToPath } from 'url'
import * as globby from 'globby'
import path from 'path';
import {Rollup} from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const resolve = (dir: string) => path.resolve(__dirname, dir);

export async function getViewEntryPoints() {
  const viewFiles = await globby.globby(['Views/**/*.cshtml.ts']);
  return Object.fromEntries(
    viewFiles.map(file => {
      const parsedPath = path.parse(file);
      const parentFolder = path.basename(parsedPath.dir).toLowerCase();
      const fileName = parsedPath.name.replace('.cshtml', '').toLowerCase();
      const entryPointName = `razor/${parentFolder}-${fileName}`;
      return [entryPointName, resolve(file)];
    })
  );
}

export function generateAssetStructure(info: Rollup.PreRenderedAsset) {
    console.log(info);

    if (info.originalFileName){
      if (/\.cshtml/.test(info.originalFileName)) {
        return 'razor/[name][extname]';
      }
    }

  if (info.name) {
    if (/\.css$/.test(info.name)) {
      return 'css/[name][extname]';
    }
    if (/\.(png|jpe?g|gif|svg|webp|avif)$/.test(info.name)) {
      return 'images/[name][extname]';
    }
    if (/\.(woff2?|eot|ttf|otf)$/i.test(info.name)) {
      return 'fonts/[name][extname]';
    }
    return 'assets/[name][extname]';
  }
  return '[name][extname]';
}