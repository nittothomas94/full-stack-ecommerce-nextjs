'use client';

import { useRouter } from 'next/navigation';

const Button = ({ text, to, className }) => {
  const router = useRouter();

  const hadleClick = () => {
    router.push(to);
  };

  return (
    <button className={className} onClick={() => hadleClick()}>
      {text}
    </button>
  );
};

export default Button;
