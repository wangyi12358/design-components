import type { FC } from 'react';
import React, { memo } from 'react';
import type { BaseProps } from '../_base';
import { buttonCva } from './style';
import type { VariantProps } from 'class-variance-authority';
import { clsxMerge } from '@light/utils';
import { useLoading } from '@light/hooks';

export interface ButtonProps extends BaseProps, VariantProps<typeof buttonCva> {
  children?: React.ReactNode;
  onClick?: () => Promise<void> | void;
  loading?: boolean;
  block?: boolean;
  icon?: React.ReactNode;
}

const Button: FC<ButtonProps> = memo((props) => {
  const { children, onClick, className, style, icon, status, size } = props;
  const [loading, setLoading] = useLoading(props.loading);
  return (
    <button
      style={style}
      onClick={() => {
        const response = onClick?.();
        if (response && !!response.then) {
          setLoading(true);
          response.finally(() => {
            setLoading(false);
          });
        }
      }}
      className={clsxMerge(buttonCva({ status, size }), { ['loading']: loading }, className)}
    >
      {icon}
      {children}
    </button>
  );
});

export default Button;
