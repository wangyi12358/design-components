import type {FC} from 'react';
import React, {memo} from 'react';

export interface ButtonProps {
}

const Button: FC<ButtonProps> = memo(() => {
  return (
    <div>Button</div>
  );
})

export default Button;
