'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SidebarLink from './SideBarLink';
import Button from '../common/Button';

const AdminSideBar = () => {
  const pathname = usePathname();

  const handleLogoutClick = () => {
    console.log('hello');
  };

  return (
    <div className="min-h-screen w-42 lg:w-60 relative top-0 left-0 flex flex-col">
      {/* <div className="w-full h-30 lg:32 flex items-center justify-center pr-5">
        <img src="/images/common/logo.png" alt="logo" className="md:size-20" />
      </div> */}

      <div className="min-h-40 flex flex-col gap-1">
        <SidebarLink
          href="/admin/dashboard"
          icon="dashboard"
          label="Dashboard"
        />
        <SidebarLink href="/admin/user" icon="group" label="User" />
        <SidebarLink
          href={'/admin/product' || 'admin/produt/:id'}
          icon="shopping_cart"
          label="Product"
        />
        <SidebarLink href="/admin/order" icon="layers" label="Order" />

        <SidebarLink href="/admin/settings" icon="settings" label="Settings" />
      </div>

      <div
        className="text-blue-600 flex items-center gap-5 absolute bottom-[5%] pl-3 hover:bg-gray-200 w-full cursor-pointer h-10"
        onClick={handleLogoutClick}
      >
        <i className="material-icons">logout</i>
        <Button text="Log Out" className="w-full text-start" />
      </div>
    </div>
  );
};

export default AdminSideBar;
