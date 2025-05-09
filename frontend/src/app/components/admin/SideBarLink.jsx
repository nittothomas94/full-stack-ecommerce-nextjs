'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SidebarLink({ href, icon, label }) {
  const pathname = usePathname();
  // const isActive = pathname === href;
  // const isActive = pathname.startsWith('/admin/product');
  // Match exact path or if current pathname starts with the href (for nested routes)
  const isActive = pathname === href || pathname.startsWith(href + '/');

  return (
    <Link
      href={href}
      className={`flex h-12 lg:h-13 pl-3 hover:bg-blue-700 text-[18px] text-gray-500 transition-all duration-50 items-center gap-1 ${
        isActive ? 'bg-[#f8e298]' : ''
      }`}
    >
      <i
        className={`material-icons text-gray-700 ${
          isActive ? 'text-black' : ''
        }`}
      >
        {icon}
      </i>

      {label}
    </Link>
  );
}
