'use client';

type ButtonProps = {
  children: string;
  className?: string;
  onClick: Function;
};

export const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button className={className} onClick={() => onClick()}>
      {children}
    </button>
  );
};
