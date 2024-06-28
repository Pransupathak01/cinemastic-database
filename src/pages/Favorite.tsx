import React from "react";
import useFavoriteApi from "../components/hooks/FavoriteApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Favorite: React.FC = () => {
  const { data, error } = useFavoriteApi();
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  if (error) {
    return <div className="text-red-500">Error: {error.message}</div>;
  }

  if (!data) {
    return (
      <div className="h-screen flex justify-center items-center">
        <div className="text-center">
          <p className="text-2xl">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold py-6">Favorite Movies and TV Shows</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 px-4 pb-4">
        {data.results.map((media) => (
          <div
            key={media.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={`${imageBaseUrl}${media.poster_path}`}
              alt={media.title || media.name}
              className="w-full h-auto"
            />
            <div className="p-2 bg-gray-300">
              <h2 className="text-lg font-bold">{media.title || media.name}</h2>
              <div className="flex flex-row justify-between">
                <p className="text-gray-700 mt-1">{media.media_type}</p>
                <div className="flex flex-row justify-center mt-1 text-blue-600 px-2 rounded rounded-md">
                  <p>{media.vote_average}</p>
                  <FontAwesomeIcon
                    icon={faStar}
                    className="ml-1 h-3 w-3 text-yellow-400"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorite;
