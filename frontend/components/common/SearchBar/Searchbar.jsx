import Input from '../Input/Input';

const SearchBar = ({ className }) => {
  return (
    <div className={className}>
      <Input className="w-full h-full rounded-none outline-none" />
      <i className="material-icons text-gray-600">search</i>
    </div>
  );
};

export default SearchBar;
