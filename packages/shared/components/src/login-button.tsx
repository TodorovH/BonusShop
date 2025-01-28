'use client';

import React from 'react';
import { signIn } from 'next-auth/react';

export const LoginButton = ({
  children,
  className,
}: {
  children: React.ReactNode;
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
