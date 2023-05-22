import { readdirSync } from 'fs';
// @ts-ignore
import chalk from 'chalk';
import { join, resolve } from 'path';
import { defineConfig } from 'dumi';

const headPkgList: string[] = [];
// utils must build before core
// runtime must build before renderer-react
const pkgList = readdirSync(join(process.cwd(), 'packages')).filter(
  (pkg) => pkg.charAt(0) !== '.' && !headPkgList.includes(pkg),
);

const alias = pkgList.reduce((pre, pkg) => {
  if (pkg === 'icons') {
    pre['@zbanx/icons'] = join(process.cwd(), 'packages', pkg, 'src');
  } else {
    pre[`@zbanx-coding/components-${pkg}`] = join(process.cwd(), 'packages', pkg, 'src');
  }
  return {
    ...pre,
  };
}, {});

console.log(`🌼 alias list \n${chalk.blue(Object.keys(alias).join('\n'))}`);

const tailPkgList = pkgList
  .map((path) => [join('packages', path, 'src')])
  .reduce((acc, val) => acc.concat(val), []);

// console.log(`tailPkgList \n${tailPkgList}`);

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  themeConfig: {
    name: 'ZBANX',
    logo: 'https://g.zbanx.com/assets/ico/favicon.ico',
    nav: [
      {
        title: '介绍',
        link: '/guide/quick-start',
      },
      {
        title: '基础组件',
        link: '/basic-components/annulargradientchart',
      },
      {
        title: '业务组件',
        link: '/business-components/creatorinfo',
      },
      {
        title: '元组件',
        link: '/meta-components/metatable',
      },
      {
        title: '图表组件',
        link: '/charts-components/annularchart',
      },
      {
        title: 'Utils',
        link: '/utils/case',
      },
      {
        title: 'Icons',
        link: '/icons',
      },
      {
        title: '仓库',
        link: 'https://zbanx.coding.net/p/frontend-templates/d/zbanx-pc-components/git',
      },
    ],
    footer: 'Zbanx.com | Copyright © 2021<br />Powered by [zbanx](https://zbanx.com)',
  },
  favicons: ['https://g.zbanx.com/assets/ico/favicon.ico'],
  outputPath: 'docs-dist',
  alias,
  mock: {},
  // apiParser: {}, // todo apiParser 有报错
  resolve: {
    // entryFile: './resolveEntry.ts',
    docDirs: ['docs'],
    atomDirs: [
      { type: 'business-component', dir: 'packages/business/src/components' },
      { type: 'charts-component', dir: 'packages/charts/src/components' },
      { type: 'meta-component', dir: 'packages/meta/src/components' },
      { type: 'basic-component', dir: 'packages/basic/src/components' },
      { type: 'shared-component', dir: 'packages/shared/src/components' },
      { type: 'icons', dir: 'packages/icons/src' },
      { type: 'utils', dir: 'packages/utils/src' },
    ],
    codeBlockMode: 'passive',
  },
  locales: [{ id: 'zh-CN', name: '中文' }],
  history: isProduction
    ? {
        type: 'hash',
      }
    : undefined,
  runtimePublicPath: {},
  publicPath: '/',
  hash: false,
  ignoreMomentLocale: true,
  // webpack5: {},
  // exportStatic: {},
  // mfsu: {},
  // mfsu: !isDeploy ? {} : undefined,
  // 关闭 dynamicImport, 只会打包成一个umi.js文件, 用于减少线上环境serverless请求数
  extraBabelPlugins: isProduction ? ['babel-plugin-dynamic-import-node'] : [],
  // chainWebpack: (memo: any) => {
  //   memo.merge({
  //     module: {
  //       rules: [
  //         {
  //           loader: 'worker-loader',
  //           options: {
  //             publicPath:
  //               'https://zbanx-banker-image.oss-cn-chengdu.aliyuncs.com/docs/pc-components/20221226193702/',
  //           },
  //         },
  //       ],
  //     },
  //   });
  // },
});
