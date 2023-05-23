import type { FC } from 'react';
import React, { memo } from 'react';
import classNames from 'classnames';
import type { BaseProps } from '../_base';

export interface ButtonProps extends BaseProps {
  children?: React.ReactNode;
  onClick?: () => void;
  loading?: boolean;
  block?: boolean;
  icon?: React.ReactNode;
}

const Button: FC<ButtonProps> = memo((props) => {
  const { children, onClick, loading, className, style, block, icon } = props;
  return (
    <button
      style={style}
      onClick={onClick}
      className={classNames(
        className,
        'btn btn-sm btn-outline',
        { ['loading']: loading },
        { ['btn-block']: block },
        { ['gap-2']: !!icon },
      )}
    >
      {icon}
      {children}
    </button>
  );
});

export default Button;
