import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="flex justify-center items-center h-[70px] px-5 shadow-md bg-gray-500 text-white text-lg">
      <div className="w-[80%] flex justify-between items-center ">
        <h3 className="font-bold">Github Search</h3>

        <span>
          <Link to="/" className="mr-5">
            Home
          </Link>
          <Link to="/favourites">Favourites</Link>
        </span>
      </div>
    </nav>
  );
};

export default Navigation;
