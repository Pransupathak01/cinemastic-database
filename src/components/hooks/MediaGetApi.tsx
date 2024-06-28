import { useEffect, useState } from "react";
import axios from "axios";
import { BearerToken } from "../../auth/Tokens";

interface Movie {
  id: number;
  original_language:string,
  title: string;
  name: string;
  overview: string;
  poster_path: string;
  release_date: string;
  media_type:string;
  first_air_date:string;
  vote_average: number;
  vote_count: number;
  // Add other fields you might use
}
interface MovieApiResponse {
  results: Movie[];
}
const useMovieApiData = (apiUrl: string) => {
  const [data, setData] = useState<Movie[]| null>(null);
  const [error, setError] = useState<Error| null>(null);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: BearerToken,
      },
    };

    axios
      .get<MovieApiResponse>(apiUrl, options)
      .then((response) => {
        setData(response.data.results);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
      });
  }, [apiUrl]);

  return { data, error };
};
export default useMovieApiData;
