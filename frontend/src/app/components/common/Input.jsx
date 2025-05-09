const Input = ({ type = 'text', className, placeholder, onChange, value }) => {
  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
