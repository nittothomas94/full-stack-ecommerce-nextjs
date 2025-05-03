// hooks/useUsers.js
import { useQuery } from '@tanstack/react-query';

const fetchUsers = async page => {
  const res = await fetch(`https://your-api.com/api/users?page=${page}`);
  if (!res.ok) throw new Error('Network response failed');
  return res.json(); // expected: { users: [...], currentPage, totalPages }
};

export const useUsers = page => {
  return useQuery({
    queryKey: ['users', page],
    queryFn: () => fetchUsers(page),
    keepPreviousData: true,
  });
};
