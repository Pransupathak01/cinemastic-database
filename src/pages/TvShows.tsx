import React, { useState } from "react";
import MediaUI from "../components/MediaUi";

const PopularTv: React.FC = () => {
  const [selectedView, setSelectedView] = useState("popular");
  const handleLinkClick = (view: string) => {
    setSelectedView(view);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-row gap-4 font-bold right-0 py-6">
        <p
          className={`cursor-pointer ${
            selectedView === "popular" ? "text-blue-700" : ""
          }`}
          onClick={() => handleLinkClick("popular")}
        >
          Popular Shows
        </p>
        <p
          className={`cursor-pointer ${
            selectedView === "trending" ? "text-blue-700" : ""
          }`}
          onClick={() => handleLinkClick("trending")}
        >
          Trending Shows
        </p>
        <p
          className={`cursor-pointer ${
            selectedView === "toprated" ? "text-blue-700" : ""
          }`}
          onClick={() => handleLinkClick("toprated")}
        >
          TopRated Shows
        </p>
        <p
          className={`cursor-pointer ${
            selectedView === "onair" ? "text-blue-700" : ""
          }`}
          onClick={() => handleLinkClick("onair")}
        >
          OnAir Shows{" "}
        </p>
      </div>
      {selectedView === "popular" && (
        <MediaUI apiUrl="https://api.themoviedb.org/3/tv/popular" />
      )}
      {selectedView === "toprated" && (
        <MediaUI apiUrl="https://api.themoviedb.org/3/tv/top_rated" />
      )}
      {selectedView === "trending" && (
        <MediaUI apiUrl="https://api.themoviedb.org/3/trending/tv/week" />
      )}
      {selectedView === "onair" && (
        <MediaUI apiUrl="https://api.themoviedb.org/3/tv/airing_today" />
      )}
    </div>
  );
};

export default PopularTv;
