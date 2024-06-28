import React from "react";
import MediaUI from "../components/MediaUi";

const TrendingMedia: React.FC = () => {
 

  return (
    <div className=" flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold py-6">Trending Movies and TV Shows</h1>
      <MediaUI apiUrl="https://api.themoviedb.org/3/trending/all/week" />
     
    </div>
  );
};

export default TrendingMedia;

