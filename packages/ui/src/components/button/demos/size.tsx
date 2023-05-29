import React from 'react';
import { Button } from '@design/ui';

type Props = {};

/**
 * @Author: wangyi
 * @Date: 2023-05-28
 */
const Demo: React.FC<Props> = () => {
  return (
    <div className="flex gap-4">
      <Button size="xs">按钮</Button>
      <Button size="sm">按钮</Button>
      <Button>按钮</Button>
      <Button size="lg">按钮</Button>
    </div>
  );
};

export default Demo;
