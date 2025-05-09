import AdminLoginForm from '../components/admin/AdminLoginForm';

const Login = () => {
  return (
    <main className="w-full min-h-screen border flex items-center justify-center flex-col gap-5 relative p-2 bg-gradient-to-b from-[#fdf6e3] via-[#fffbe9] to-[#fef6cc]">
      <div className="size-20 absolute m-auto md:top-[4%]">
        <img
          src="/images/common/e-com-logo.png"
          alt="logo"
          className="rounded-full object-center object-contain"
        />
      </div>

      <AdminLoginForm />
    </main>
  );
};

export default Login;
