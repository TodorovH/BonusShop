export const Footer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return <footer className={className}>{children}</footer>;
};
