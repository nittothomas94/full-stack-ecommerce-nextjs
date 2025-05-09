// /app/page.js (Home Page)

'use client';

import { useRouter } from 'next/navigation';

import Button from './components/common/Button';
export default function HomePage() {
  const router = useRouter();

  const handleClick = to => {
    router.push(to);
  };

  return (
    <main className="font-sans">
      <h1>Welcome to My Store</h1>
      <Button
        text="Go to Admin Login"
        // to="/admin/login"
        onClick={() => {
          handleClick('/adminlogin');
        }}
        className="h-10 bg-red-500 text-white font-bold active:scale-95 px-20 rounded-[10px] hover:bg-red-600 cursor-pointer"
      />
    </main>
  );
}
