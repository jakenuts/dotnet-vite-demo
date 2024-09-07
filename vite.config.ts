import { defineConfig, UserConfig, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve, generateAssetStructure, getViewEntryPoints } from './vite.utils'

export default defineConfig(async (cfg: ConfigEnv) => {

  const isProduction = cfg.mode === 'production';

  console.log(`🔨 Building for ${cfg.mode} mode`);

  const viewEntryPoints = await getViewEntryPoints();

  const config: UserConfig = {
    plugins: [vue()],
    root: 'ClientApp',
    base: '/dist',
    clearScreen: true,
    appType: 'mpa',
    build: {
      outDir: '../wwwroot/dist',
      minify: isProduction,
      emptyOutDir: true,//isProduction,
      manifest: true,
      rollupOptions: {

        // =====================
        // Entry Points
        // =====================
        input: {
          'main': 'ClientApp/main.ts',
          ...viewEntryPoints
        },
        output:{
        entryFileNames: '[name].js',
        chunkFileNames: 'chunks/[name].js',
        // Use the imported assetFileNames function
        assetFileNames: generateAssetStructure,
      }
      }
    },
    resolve: {
      alias: {        
        '@': resolve('ClientApp'),        
        '#': resolve('Views'),
      }
    }
  };

    return config;
  });
