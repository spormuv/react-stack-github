import { MouseEvent, useState } from 'react';
import { useActions } from '../hooks/actions';
import { useAppSelector } from '../hooks/redux';
import { IRepo } from '../types/models';

const RepoCard = ({ repo }: { repo: IRepo }) => {
  const { addFavourite, removeFavourite } = useActions();
  const { favoutires } = useAppSelector(state => state.github);
  const [isFavorite, setIsFavorite] = useState(
    favoutires.includes(repo.html_url)
  );

  const addToFavorite = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addFavourite(repo.html_url);
    setIsFavorite(true);
  };

  const removeFromFavorite = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    removeFavourite(repo.html_url);
    setIsFavorite(false);
  };

  return (
    <div className="border py-3 px-5 rounded mb-2 bg-white hover:shadow-md hover:bg-gray-100 transition-all">
      <a href={repo.html_url} target="_blank">
        <h2 className="font-bold text-lg">{repo.full_name}</h2>
        <p className="text-sm">
          Forks: <span className="font-bold mr-2">{repo.forks}</span>
          Watchers: <span className="font-bold">{repo.watchers}</span>
        </p>
        <p className="text-sm font-thin">{repo?.description}</p>

        {!isFavorite ? (
          <button
            className="py-2 px-4 mr-2 bg-yellow-400 rounded hover:shadow-md transition-all mt-5"
            onClick={addToFavorite}
          >
            Add to Favourites
          </button>
        ) : (
          <button
            className="py-2 px-4 bg-red-400 rounded hover:shadow-md transition-all mt-5"
            onClick={removeFromFavorite}
          >
            Remove from Favourites
          </button>
        )}
      </a>
    </div>
  );
};

export default RepoCard;
