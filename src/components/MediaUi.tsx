import React from "react";
import useMovieApiData from "./hooks/MediaGetApi";
import useFavoriteApi from "./hooks/FavoriteApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

interface MediaProps {
  apiUrl: string;
}

const MediaUI: React.FC<MediaProps> = ({ apiUrl }) => {
  const { data, error } = useMovieApiData(apiUrl);
  const { addToFavorites } = useFavoriteApi();
  const imageBaseUrl = "https://image.tmdb.org/t/p/w400";

  if (error) {
    return <div className="text-red-500">Error: {error.message}</div>;
  }
  const handleAddToFavorites = (mediaId: number, mediaType: string) => {
    addToFavorites(mediaId, mediaType, true);
  };


  return (
    <div className="px-4 pb-2">
      {data ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {data.map((media) => (
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
                <h2 className="text-lg font-bold">
                  {media.title || media.name}
                </h2>
                <div className="flex flex-row justify-between">
                  <p  onClick={() => handleAddToFavorites(media.id, media.media_type)} 
                  className="text-blue-500 cursor-pointer mt-1">Add to Favorite</p>
                  {/* <p className="text-gray-800 mt-1 text-md">{media.release_date ||  media.first_air_date}</p> */}
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
      ) : (
        <div className="h-screen flex justify-center items-center" >
        <div className="text-center">
          <p className="text-2xl">Loading...</p>
        </div>
      </div>
      )}
    </div>
  );
};

export default MediaUI;
