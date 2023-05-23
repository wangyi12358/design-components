import { mergeLocale } from '@design/utils';
import enUS from './en-US';

const zhCN = mergeLocale(enUS, {
  language: 'zh-CN',
  button: {},
});

export default zhCN;
