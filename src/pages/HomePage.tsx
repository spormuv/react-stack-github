/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */

import { useEffect, useState } from 'react';
import { useDebounce } from '../hooks/debounce';
import { useSearchUsersQuery } from '../store/github/github.api';

const HomePage = () => {
  const [search, setSearch] = useState('');
  const [dropdown, setDropdown] = useState(false);
  const debounced = useDebounce(search);
  const { data, isLoading, isError } = useSearchUsersQuery(debounced, {
    skip: debounced.length < 3,
  });

  useEffect(() => {
    setDropdown(debounced.length >= 3 && data?.length! > 0);
  }, [data?.length, debounced]);

  return (
    <div className="flex justify-center pt-10 mx-auto h-[calc(100vh-50px)]">
      {isError && (
        <p className="text-center text-red-600">Something went wrong...</p>
      )}

      <div className="relative w-[560px] max-w-[560px] mx-10">
        <input
          type="text"
          className="border py-2 px-4 w-full h-[42px] mb-2 outline-none"
          placeholder="Search Github Username..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        {dropdown && (
          <ul className="absolute list-none top-[50px] left-0 right-0 max-h-[300px] overflow-y-scroll shadow-md bg-white">
            {isLoading && <p className="text-center">Loading...</p>}
            {data?.map(user => (
              <li
                key={user.id}
                className="py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer"
              >
                {user.login}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default HomePage;
