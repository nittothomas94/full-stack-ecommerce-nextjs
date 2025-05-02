'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SidebarLink({ href, icon, label }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <div
      className={`flex h-10 items-center pl-2 hover:bg-blue-700 ${
        isActive ? 'bg-blue-700 text-white' : ''
      }`}
    >
      <i
        className={`material-icons text-gray-700 ${
          isActive ? 'text-white' : ''
        }`}
      >
        {icon}
      </i>
      <Link
        href={href}
        className={`px-3 py-[3px] text-[18px] text-gray-700 transition-all duration-50 ${
          isActive ? 'text-white' : ''
        }`}
      >
        {label}
      </Link>
    </div>
  );
}
