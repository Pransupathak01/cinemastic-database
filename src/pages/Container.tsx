import React, { Suspense, lazy, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from ".././components/Navbar";
const Movies = lazy(() => import("./Movies"));
const TrendingMedia = lazy(() => import("./TrendingMedia"));
const TvShows = lazy(() => import("./TvShows"));
const Favorite = lazy(() => import("./Favorite"));

const Container: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);
 const handleLoading= <div className="h-screen flex justify-center items-center" >
 <div className="text-center">
   <p className="text-2xl">Loading...</p>
 </div>
</div>
  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        {handleLoading}
      </div>
    );
  }
  return (
    <Router>
      <div className="flex flex-1 flex-col">
        <Navbar />
        <Suspense fallback={handleLoading}>
          <Routes>
            <Route path="/" element={<TrendingMedia />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/tv" element={<TvShows />} />
            <Route path="/favorite" element={<Favorite />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default Container;
