const Button = ({ text, className, onClick, children }) => {
  return (
    <button className={className} onClick={onClick}>
      {children ? children : text}
    </button>
  );
};

export default Button;
