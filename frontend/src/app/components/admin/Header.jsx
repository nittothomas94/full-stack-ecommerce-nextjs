import SearchBar from '../common/Searchbar';

const Header = () => {
  return (
    <header className="w-full h-17 flex items-center justify-end pr-5 shadow shadow-gray-200">
      <div className="w-90 h-9 flex items-center justify-evenly lg:w-110">
        <SearchBar className="w-60  h-full flex items-center gap-3 border border-violet-200 rounded-[5px] px-4 lg:w-75" />
        <i className="material-icons bg-blue-800 text-white hover:bg-blue-950 size-8 p-1 rounded-[5px]">
          settings
        </i>
        <img
          src="/images/admin/default-admin-img.png"
          alt="admin immage"
          className="size-9 rounded-full"
        />
      </div>
    </header>
  );
};

export default Header;
