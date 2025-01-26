'use client';

import React from 'react';

export const LoginButton = ({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode;
  onClick: Function;
  className: string;
}) => {
  return (
    <button className={className} onClick={onClick()}>
      {children}
    </button>
  );
};
