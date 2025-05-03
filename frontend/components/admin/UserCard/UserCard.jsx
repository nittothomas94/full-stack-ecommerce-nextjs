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
  ];

  return (
    <div className="relative bg-gray-200 text-black rounded-t-md p-4 shadow-md w-[88%] h-full ">
      {/* Table Header */}
      <div className="w-full grid grid-cols-5 lg:grid-cols-6 font-semibold border-b border-b-gray-400 py-3 px-2 text-left text-gray-600">
        <div>User ID</div>
        <div>Full name</div>
        <div className="md:hidden lg:block">Email</div>
        <div>Phone number</div>
        <div>Address</div>
        <div>Order details</div>
      </div>

      {/* Table Rows */}
      {userData.map(user => (
        <div
          key={user.id}
          className="grid grid-cols-5 lg:grid-cols-6 border-b border-b-gray-300 min-h-14 items-center px-2 text-left text-sm text-gray-800"
        >
          <div>{user.id}</div>
          <div>{user.name}</div>
          <div className="md:hidden lg:block">{user.email}</div>
          <div>{user.phone}</div>
          <div>{user.address}</div>
          <div className="text-blue-600 cursor-pointer hover:underline ml-5">
            View order
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserCard;
