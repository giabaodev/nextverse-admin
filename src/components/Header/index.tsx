import { Bell, User } from 'lucide-react';
import { ReactNode } from 'react';

interface HeaderProps {
  leftElement?: ReactNode;
}

export const Header = ({ leftElement }: HeaderProps) => {
  return (
    <div className="md:h-20 flex items-center justify-between py-4 px-6 bg-sidebar">
      <div className="flex gap-6">
        {leftElement}
        Search Component
      </div>
      <div className="flex gap-6">
        <Bell />
        <User />
      </div>
    </div>
  );
};
