import { useLoaderData } from "react-router-dom";
import { Card } from "../Components/UI/Card";


export const Movie = () => {
  const moviesData = useLoaderData();
  console.log(moviesData);

  return (
    <ul className="w-full pl-3 pr-3 px-4 sm:px-6 md:px-8 lg:px-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-5">
      {moviesData &&
        moviesData.Search.map((curMovie) => {
          return <Card key={curMovie.imdbID} curMovie={curMovie} />;
        })}
    </ul>
  );
};