'use client';

import React from 'react';
import { signIn } from 'next-auth/react';

export const LoginButton = ({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode;
  onClick?: Function;
  className: string;
}) => {
  return (
    <button
      className={className}
      onClick={() => {
        signIn();
      }}
    >
      {children}
    </button>
  );
};
