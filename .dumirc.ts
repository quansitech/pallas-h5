import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  publicPath: '/pallas-h5/',
  base: '/pallas-h5/',
  themeConfig: {
    name: 'pallas-h5',
  },
  mock: {
    include: ['mock/**/*.{ts,tsx}'],
  },
});
