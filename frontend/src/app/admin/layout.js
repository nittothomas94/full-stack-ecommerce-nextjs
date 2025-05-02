// /app/admin/layout.js
import AdminSideBar from '../../../components/admin/AdminSideBar/SideBar';

export default function AdminLayout({ children }) {
  return (
    <main className="bg-white text-black min-h-screen">
      {/* You can add AdminHeader or Sidebar here */}
      <div className="flex w-full">
        <AdminSideBar />
        {children}
      </div>
    </main>
  );
}
