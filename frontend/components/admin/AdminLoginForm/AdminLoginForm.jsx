'use client';

import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import { useState } from 'react';
import {
  ToastContainer,
  toast,
  Slide,
  Zoom,
  Flip,
  Bounce,
} from 'react-toastify';
import { useRouter } from 'next/navigation';

const AdminLoginForm = () => {
  const [login, setLogin] = useState();
  const router = useRouter();

  const handleChange = (e, key) => {
    setLogin({ ...login, [key]: e.target.value });
  };

  console.log(login);

  const handleClick = () => {
    try {
      console.log('send data(POST) to backend');
      console.log(login);
      toast.success('Logined Sucessfully');
      setTimeout(() => {
        router.push('/admin/dashboard');
      }, 2000);
    } catch (e) {
      console.log(e.message);
      toast.error('Logined UnSucessfully');
    }
  };

  return (
    <>
      <div className="w-full h-95 flex flex-col gap-5 items-center justify-center shadow-md p-2 bg-white rounded-[6px] md:w-[600px] md:h-[480px] md:p-[40px] md:mt-22">
        <h1 className="text-4xl font-bold md:text-[45px]">Welcome</h1>
        <p className="text-gray-400 md:text-[22px]">
          Please log in to continue
        </p>
        <Input
          className="w-full h-10 border border-gray-300 p-3 rounded-[5px] md:h-13"
          placeholder="Email address"
          onChange={e => handleChange(e, 'email')}
        />
        <Input
          className="w-full h-10 border border-gray-300 p-3 rounded-[5px] md:h-13"
          placeholder="password"
          onChange={e => handleChange(e, 'password')}
        />
        <Button
          className="w-full bg-blue-600 text-white h-10 rounded-[5px] cursor-pointer hover:bg-blue-900 active:scale-95 md:h-13"
          text="Login"
          onClick={() => handleClick()}
        />
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Flip}
      />
    </>
  );
};

export default AdminLoginForm;
