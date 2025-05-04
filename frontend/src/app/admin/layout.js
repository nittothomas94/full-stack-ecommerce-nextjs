// /app/admin/layout.js

import AdminSideBar from '../../../components/admin/AdminSideBar/SideBar';
import Header from '../../../components/admin/Header/Header';

export default function AdminLayout({ children }) {
  return (
    <main className="min-h-screen w-full 2xl:flex 2xl:items-center 2xl:justify-center">
      {/* You can add AdminHeader or Sidebar here */}

      <div className="bg-white text-black flex w-full min-h-screen 2xl:w-[1550px]">
        <AdminSideBar />
        <div className="w-full flex flex-col bg-gray-100">
          <Header />
          {children}
        </div>
      </div>
    </main>
  );
}
