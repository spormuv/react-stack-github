import { useSearchUsersQuery } from '../store/github/github.api';

const HomePage = () => {
  const { data, isLoading, isError } = useSearchUsersQuery('react');
  console.log(data);

  return <div>Home</div>;
};

export default HomePage;
