import type { FC } from 'react';
import React, { memo } from 'react';
import classNames from 'classnames';
import type { BaseProps } from '../_base';
import { buttonCva } from './style';
import type { VariantProps } from 'class-variance-authority';

export interface ButtonProps extends BaseProps, VariantProps<typeof buttonCva> {
  children?: React.ReactNode;
  onClick?: () => void;
  loading?: boolean;
  block?: boolean;
  icon?: React.ReactNode;
}

const Button: FC<ButtonProps> = memo((props) => {
  const { children, onClick, loading, className, style, icon, status, size } = props;
  return (
    <button
      style={style}
      onClick={onClick}
      className={classNames(buttonCva({ status, size }), { ['loading']: loading }, className)}
    >
      {icon}
      {children}
    </button>
  );
});

export default Button;
