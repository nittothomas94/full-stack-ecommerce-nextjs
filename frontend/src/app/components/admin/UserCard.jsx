const UserCard = () => {
  const userData = [
    {
      id: '1001',
      name: 'Alice Johnson',
      email: 'alicej@example.com',
      phone: '9876543210',
      address: '12 Baker Street, London',
    },
    {
      id: '1002',
      name: 'Bob Smith',
      email: 'bobsmith@example.com',
      phone: '9123456789',
      address: '22 Maple Ave, New York',
    },
    {
      id: '1003',
      name: 'Charlie Brown',
      email: 'charlieb@example.com',
      phone: '9988776655',
      address: '45 Elm St, San Francisco',
    },
    {
      id: '1004',
      name: 'Diana Prince',
      email: 'diana@example.com',
      phone: '9090909090',
      address: '100 Wonder Lane, Themyscira',
    },
    {
      id: '1005',
      name: 'Ethan Hunt',
      email: 'ethanh@example.com',
      phone: '9191919191',
      address: 'Mission Street, LA',
    },
    {
      id: '1006',
      name: 'Fiona Gallagher',
      email: 'fionag@example.com',
      phone: '9881234567',
      address: 'South Side, Chicago',
    },
    {
      id: '1007',
      name: 'George Miller',
      email: 'georgem@example.com',
      phone: '9345678123',
      address: '10 Oak Lane, Seattle',
    },
    {
      id: '1008',
      name: 'Hannah Wells',
      email: 'hannahw@example.com',
      phone: '9456781234',
      address: '33 Capitol Hill, DC',
    },
    {
      id: '1009',
      name: 'Hannah Wells',
      email: 'hannahw@example.com',
      phone: '9456781234',
      address: '33 Capitol Hill, DC',
    },
    {
      id: '1010',
      name: 'Hannah Wells',
      email: 'hannahw@example.com',
      phone: '9456781234',
      address: '33 Capitol Hill, DC',
    },
  ];

  return (
    <div className="relative bg-gray-200 text-black rounded-t-md p-4 shadow-md w-full lg:w-[88%] h-full">
      {/* Table Header */}
      <div className="w-full grid md:grid-cols-10 md:gap-5 xl:grid-cols-15 xl:gap-5 border font-semibold border-b border-b-gray-400 py-3 px-2 text-left items-center text-gray-600">
        <div>User ID</div>
        <div className=" md:col-span-2 xl:col-span-2">Full name</div>
        <div className="md:hidden xl:block md:col-span-2 xl:col-span-4">
          Email
        </div>
        <div className="md:col-span-2 xl:col-span-2">Phone number</div>
        <div className="md:col-span-3 xl:col-span-4">Address</div>
        <div className="md:col-span-2 xl:col-span-2">Order details</div>
      </div>

      {/* Table Rows */}
      {userData.map(user => (
        <div
          key={user.id}
          className="grid grid-cols-10 gap-5 xl:gap-1  xl:grid-cols-15 border-b border-b-gray-300 min-h-14 items-center justify-between px-2 text-left text-sm text-gray-800"
        >
          <div>{user.id}</div>
          <div className=" col-span-2 xl:col-span-2">{user.name}</div>
          <div className="md:hidden xl:block col-span-2 xl:col-span-4">
            {user.email}
          </div>
          <div className=" col-span-2 xl:col-span-2">{user.phone}</div>
          <div className=" col-span-3 xl:col-span-4">{user.address}</div>
          <div className="text-blue-600 cursor-pointer hover:underline col-span-2 xl:col-span-2">
            View order
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserCard;
