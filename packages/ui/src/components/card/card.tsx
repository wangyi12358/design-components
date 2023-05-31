import type { FC } from 'react';
import React, { memo } from 'react';
import { type BaseProps } from '../_base';
import { clsxMerge } from '@light/utils';

export interface CardProps extends BaseProps {
  children?: React.ReactNode;
  title?: React.ReactNode;
}

const Card: FC<CardProps> = memo((props) => {
  const { children, title, className, style } = props;

  return (
    <div
      style={style}
      className={clsxMerge('card card-compact w-96 bg-base-100 shadow-xl', className)}
    >
      <div className="card-body">
        {title && <h2 className="card-title">{title}</h2>}
        {children}
      </div>
    </div>
  );
});

export default Card;
