// /app/admin/layout.js

import AdminSideBar from '../../../components/admin/AdminSideBar/SideBar';
import Header from '../../../components/admin/Header/Header';

export default function AdminLayout({ children }) {
  return (
    <main className="bg-white text-black min-h-screen">
      {/* You can add AdminHeader or Sidebar here */}

      <div className="flex w-full min-h-screen">
        <AdminSideBar />
        <div className="w-full flex flex-col bg-gray-100">
          <Header />
          {children}
        </div>
      </div>
    </main>
  );
}
