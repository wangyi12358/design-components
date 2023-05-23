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
  return {
    ...pre,
    [`@design/${pkg}`]: join(process.cwd(), 'packages', pkg, 'src'),
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
        title: '组件',
        link: '/components/button',
      },
      {
        title: 'Utils',
        link: '/utils/case',
      },
      {
        title: '仓库',
        link: 'https://github.com/wangyi12358/design-components',
      },
    ],
    footer: 'Design Components',
  },
  favicons: [],
  outputPath: 'docs-dist',
  alias,
  mock: {},
  // apiParser: {}, // todo apiParser 有报错
  resolve: {
    // entryFile: './resolveEntry.ts',
    docDirs: ['docs'],
    atomDirs: [
      { type: 'component', dir: 'packages/ui/src/components' },
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
});
