// /app/admin/layout.js

import AdminSideBar from '../components/admin/SideBar';
import Header from '../components/admin/Header';
export default function AdminLayout({ children }) {
  return (
    <main className="min-h-screen w-full 2xl:flex 2xl:justify-center">
      <div className="bg-white text-black flex min-h-screen w-full 2xl:w-[1750px]">
        <AdminSideBar />
        <div className="flex flex-col bg-[#fffbf0] w-full min-h-screen">
          <Header />
          {children}
        </div>
      </div>
    </main>
  );
}
