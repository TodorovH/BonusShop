import { Navbar } from '@repo/components/navbar';
import { Menu } from '@repo/components/menu';

export const Header = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <header className={className}>
      {children}
      <Navbar>
        <Menu />
      </Navbar>
    </header>
  );
};
