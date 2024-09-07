import path from 'path'
import { fileURLToPath } from 'url'

//*********************************** 
// Path resolution utilities
//*********************************** 
const __dirname = path.dirname(fileURLToPath(import.meta.url))
export const resolve = (dir: string) => path.resolve(__dirname, dir)

//*********************************** 
// Asset file & folders structure
//*********************************** 

// Patterns for file folders
export const filePatterns = {
  css: /\.css$/,
  image: /\.(png|jpe?g|gif|svg|webp|avif)$/,
  font: /\.(woff2?|eot|ttf|otf)$/i,
}

// Asset file names function
export const generateAssetStructure = (info: { name?: string }) => {
  if (info.name) {
    // If the file is a CSS file, save it to the css folder
    if (filePatterns.css.test(info.name)) {
      return 'css/[name][extname]';
    }

    // If the file is an image file, save it to the images folder
    if (filePatterns.image.test(info.name)) {
      return 'images/[name][extname]';
    }

    if (filePatterns.font.test(info.name)) {
      return 'fonts/[name][extname]';
    }
    // If the file is any other type of file, save it to the assets folder 
    return 'assets/[name][extname]';
  } else {
    // If the file name is not specified, save it to the output directory
    return '[name][extname]';
  }
}