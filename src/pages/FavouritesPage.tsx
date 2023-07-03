import { useAppSelector } from '../hooks/redux';

const FavouritesPage = () => {
  const { favoutires } = useAppSelector(state => state.github);

  if (favoutires.length === 0) {
    return (
      <p className="text-center font-semibold text-xl mt-5">No favoutires</p>
    );
  }

  return (
    <div className="flex justify-center pt-10 mx-auto h-[calc(100vh-50px)] text-xl italic">
      <ul className="list-disc">
        {favoutires.map(item => (
          <li key={item}>
            <a href={item} target="_blank" className=" hover:underline">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavouritesPage;
