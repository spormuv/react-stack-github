import { Link } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux';

const Navigation = () => {
  const { favoutires } = useAppSelector(state => state.github);

  return (
    <nav className="flex justify-center items-center h-[70px] px-5 shadow-md bg-gray-500 text-white text-lg">
      <div className="w-[80%] flex justify-between items-center ">
        <h3 className="font-bold">Github Search</h3>

        <span>
          <Link to="/" className="mr-5">
            Home
          </Link>
          <Link to="/favourites" className="relative">
            Favourites
            {favoutires.length > 0 && (
              <span className="absolute -right-5 -top-1 text-sm w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center text-gray-600">
                {favoutires.length}
              </span>
            )}
          </Link>
        </span>
      </div>
    </nav>
  );
};

export default Navigation;
