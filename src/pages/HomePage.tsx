/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */

import { useEffect, useState } from 'react';
import RepoCard from '../components/RepoCard';
import { useDebounce } from '../hooks/debounce';
import {
  useLazyGetUserReposQuery,
  useSearchUsersQuery,
} from '../store/github/github.api';

const HomePage = () => {
  const [search, setSearch] = useState('');
  const [dropdown, setDropdown] = useState(false);
  const debounced = useDebounce(search);
  const { data, isLoading, isError } = useSearchUsersQuery(debounced, {
    skip: debounced.length < 3,
    refetchOnFocus: true,
  });
  const [fetchRepos, { isLoading: areReposLoading, data: repos }] =
    useLazyGetUserReposQuery();

  useEffect(() => {
    setDropdown(debounced.length >= 3 && data?.length! > 0);
  }, [data?.length, debounced]);

  const clickHandler = (username: string) => {
    fetchRepos(username);
    setDropdown(false);
  };

  return (
    <div className="flex justify-center pt-10 mx-auto h-[calc(100vh-70px)]">
      {isError && (
        <p className="text-center text-red-600">Something went wrong...</p>
      )}

      <div className="relative w-[560px] max-w-[560px] mx-10">
        <input
          type="text"
          className="border border-gray-500 py-2 px-4 w-full h-[42px] mb-2 outline-none rounded"
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
                onClick={() => clickHandler(user.login)}
                className="py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer"
              >
                {user.login}
              </li>
            ))}
          </ul>
        )}

        <div className="container">
          {areReposLoading && (
            <p className="text-center">Repos are loading...</p>
          )}
          {repos?.map(repo => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
