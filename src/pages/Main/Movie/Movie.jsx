import { Outlet } from 'react-router-dom';
import './Movie.css';  

const Movies = () => {
  return (
    <div className="movies-page-container">
      <h1>Movie Page</h1>
      <Outlet />
    </div>
  );
};

export default Movies;
