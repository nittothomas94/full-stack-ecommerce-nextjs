import AdminLoginForm from '../../../components/admin/AdminLoginForm';

const Login = () => {
  return (
    <main className="w-full min-h-screen border flex items-center justify-center flex-col gap-5 relative p-2 bg-gradient-to-b from-blue-800 via-violet-600 to-white">
      <div className="size-20 absolute m-auto top-[13%] md:top-[8%]">
        <img
          src="/images/common/logo.png"
          alt="logo"
          className="rounded-full object-center object-contain"
        />
      </div>

      <AdminLoginForm />
    </main>
  );
};

export default Login;
