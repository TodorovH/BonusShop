'use client';

import Link from 'next/link';

export const LinkButton = ({
  children,
  destinationPage,
  className,
}: {
  children: React.ReactNode;
  destinationPage: string;
  className: string;
}) => {
  return (
    <Link href={destinationPage}>
      <button className={className}>{children}</button>
    </Link>
  );
};
