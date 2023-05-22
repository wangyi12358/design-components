import { defineConfig } from 'father';

export default defineConfig({
  platform: 'browser',
  esm: {
    output: 'es',
  },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: '@zbanx/icons',
        libraryDirectory: 'es/icons',
        camel2DashComponentName: false,
      },
      // @ts-ignore
      '@zbanx/icons',
    ],
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        // style: true,
      },
      // @ts-ignore
      'antd',
    ],
  ],
});
