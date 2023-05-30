import React from 'react';
import { Button } from '@light/ui';

type Props = {};

/**
 * @Author: wangyi
 * @Date: 2023-05-28
 */
const Demo: React.FC<Props> = () => {
  return (
    <div className="flex gap-4">
      <Button>Loading</Button>
      <Button
        onClick={async () => {
          await new Promise((resolve) => {
            setTimeout(() => {
              resolve('');
            }, 3000);
          });
        }}
      >
        点击Loading
      </Button>
    </div>
  );
};

export default Demo;
