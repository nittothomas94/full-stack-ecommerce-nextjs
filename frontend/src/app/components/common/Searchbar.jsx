import Input from './Input';

const SearchBar = ({ className, onChange, placeholder }) => {
  return (
    <div className={className}>
      <Input
        className="w-full h-full rounded-none outline-none"
        placeholder={placeholder}
        onChange={onChange}
      />
      <i className="material-icons text-gray-600">search</i>
    </div>
  );
};

export default SearchBar;
