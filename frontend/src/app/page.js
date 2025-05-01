// /app/page.js (Home Page)

import Button from '../../components/common/Button/Button';
export default function HomePage() {
  return (
    <main>
      <h1>Welcome to My Store</h1>
      <Button
        text="Go to Admin Login"
        to="/admin/login"
        className="h-10 bg-red-500 text-white font-bold active:scale-95 px-20 rounded-[10px] hover:bg-red-600 cursor-pointer"
      />
    </main>
  );
}
