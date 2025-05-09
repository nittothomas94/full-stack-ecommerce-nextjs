'use client';
import SearchBar from '@/app/components/common/Searchbar';
import UserCard from '@/app/components/admin/UserCard';
import ReactPaginate from 'react-paginate';
import axios from '../../../../utils/axios';
import { useState, useEffect } from 'react';
const AdminUserPage = () => {
  const [currentpage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [users, setUsers] = useState();

  useEffect(() => {
    paginatedUsers();
  }, []);

  const handlePageClick = e => {
    setCurrentPage(e.selected + 1);
  };

  // console.log('current page = ', currentpage);

  const paginatedUsers = async () => {
    // const response = await axios.get(
    //   `/users?page=${currentpage}&limit=${limit}`
    // );
    // console.log(response);

    console.log('https://ecomdummy.onrender.com/api/users?page=' + currentpage);
  };

  return (
    <main className="w-full min-h-50 py-3 pb-8 px-3 2xl:px-5 flex flex-col gap-5">
      <h1 className="text-[20px] lg:text-[30px] font-bold">User Management</h1>
      {/* Search By User Id */}
      <div className="flex h-10 items-center gap-3 w-full">
        <SearchBar
          className="w-60  h-full flex items-center gap-3 border border-gray-400 rounded-[5px] px-4 lg:w-75"
          placeholder="Search By User Id"
        />
        <i className="material-icons size-8 bg-blue-700 text-white p-[4px] rounded-[5px]">
          arrow_downward
        </i>
      </div>

      <div className="flex flex-col xl:flex-row w-full xl:items-center min-h-[70%] h-fit gap-5 relative">
        <UserCard />
        <ReactPaginate
          breakLabel="..."
          nextLabel={<i className="fa-solid fa-arrow-down"></i>}
          previousLabel={<i className="fa-solid fa-arrow-up"></i>}
          onPageChange={handlePageClick}
          pageRangeDisplayed={10}
          pageCount={10}
          forcePage={currentpage - 1}
          renderOnZeroPageCount={null}
          containerClassName="lg:absolute right-5 bottom-0 flex items-center justify-center gap-2 mt-6 bg-gray-200 p-3 rounded-md lg:flex-col"
          pageClassName="w-8 h-8 rounded-full flex items-center justify-center border cursor-pointer"
          activeClassName="bg-blue-900 text-white"
          previousClassName="cursor-pointer"
          nextClassName="cursor-pointer"
        />
      </div>
    </main>
  );
};

export default AdminUserPage;
