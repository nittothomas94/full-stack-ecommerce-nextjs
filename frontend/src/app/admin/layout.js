// /app/admin/layout.js

import AdminSideBar from '../../../components/admin/AdminSideBar/SideBar';
import Header from '../../../components/admin/Header/Header';

export default function AdminLayout({ children }) {
  return (
    <main className="min-h-screen w-full 2xl:flex 2xl:justify-center">
      {/* You can add AdminHeader or Sidebar here */}

      <div className="bg-white text-black flex min-h-screen md:w-full 2xl:w-[1700px]">
        <AdminSideBar />
        <div className="flex flex-col bg-gray-100 w-full">
          <Header />
          {children}
        </div>
      </div>
    </main>
  );
}
