import { Header, Menubar } from '@/components';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { Menu } from 'lucide-react';
import { Outlet } from 'react-router';

export function MainLayout() {
  return (
    <div className="min-h-screen">
      <SidebarProvider className="relative">
        <Menubar />
        <div className="w-full">
          <Header leftElement={<SidebarTrigger icon={<Menu />} />} />
          <main className="bg-[#F5F6FA] p-7">
            <Outlet />
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
}
