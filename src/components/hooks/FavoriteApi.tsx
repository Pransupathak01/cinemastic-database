import { useState, useEffect } from "react";
import axios from "axios";
import { Account_Id, BearerToken } from "../../auth/Tokens";


interface FavoriteItem {
  id: number;
  original_language: string;
  title?: string;
  name?: string;
  overview: string;
  poster_path: string;
  release_date?: string;
  first_air_date?: string;
  vote_average: number;
  vote_count: number;
  media_type: string; 
}

interface FavoritesApiResponse {
  results: FavoriteItem[];
}

const useFavoriteApi = () => {
  const [data, setData] = useState<FavoritesApiResponse | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const fetchFavorites = () => {
    const apiUrlMovies = `https://api.themoviedb.org/3/account/${Account_Id}/favorite/movies`;
    const apiUrlTv = `https://api.themoviedb.org/3/account/${Account_Id}/favorite/tv`;

    const options = {
      headers: {
        accept: "application/json",
        Authorization: BearerToken,
      },
    };

    const requests = [
      axios.get<FavoritesApiResponse>(apiUrlMovies, options),
      axios.get<FavoritesApiResponse>(apiUrlTv, options),
    ];

    axios
      .all(requests)
      .then(
        axios.spread((moviesResponse, tvResponse) => {
          const combinedData: FavoriteItem[] = [
            ...moviesResponse.data.results.map(item => ({ ...item, media_type: 'movie' })),
            ...tvResponse.data.results.map(item => ({ ...item, media_type: 'tv' })),
          ];
          setData({ results: combinedData });
        })
      )
      .catch((err) => {
        setError(err);
      });
  };

  const addToFavorites = (mediaId: number, mediaType: string, favorite: boolean) => {
    const apiUrl = `https://api.themoviedb.org/3/account/${Account_Id}/favorite`;
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        Authorization: BearerToken,
      },
      data: {
        media_type: mediaType,
        media_id: mediaId,
        favorite: favorite,
      },
    };

    axios
      .post(apiUrl, options.data, options)
      .then((response) => {
        console.log(response.data);
        fetchFavorites();
      })
      .catch((err) => {
        setError(err);
      });
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  return { data, error, addToFavorites };
};

export default useFavoriteApi;
