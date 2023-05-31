import type { FC } from 'react';
import React, { memo } from 'react';

export interface CardProps {
  children?: React.ReactNode;
  title?: React.ReactNode;
}

const Card: FC<CardProps> = memo((props) => {
  const { children, title } = props;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        {title && <h2 className="card-title">{title}</h2>}
        {children}
      </div>
    </div>
  );
});

export default Card;
