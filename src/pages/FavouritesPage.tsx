import { useAppSelector } from '../hooks/redux';

const FavouritesPage = () => {
  const { favoutires } = useAppSelector(state => state.github);

  if (favoutires.length === 0) {
    return <p className="text-center">No favoutires</p>;
  }

  return (
    <div className="flex justify-center pt-10 mx-auto h-[calc(100vh-50px)]">
      <ul className="list-none">
        {favoutires.map(item => (
          <li key={item}>
            <a
              href={item}
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavouritesPage;
