import { useEffect, useState } from "react";
import { useMovieContext } from "../../../../context/MovieContext";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./View.css";

function View() {
  const { movie, setMovie } = useMovieContext();
  const { movieId, tmdbId } = useParams();
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");

  const [castInformation, setCastInformation] = useState([]);
  const [photoInformation, setPhotoInformation] = useState([]);
  const [videoInformation, setVideoInformation] = useState([]);

  useEffect(() => {
    if (!movieId) return;

    axios
      .get(`/movies/${movieId}`)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
        navigate("/main/movies");
      });
  }, [movieId, setMovie, navigate]);


  useEffect(() => {
    if (!movie) return;

    const fetchData = async () => {
      try {
        const headers = {
          Accept: "application/json",
          Authorization: `Bearer ${accessToken}`,
        };

        const [castRes, photoRes, videoRes] = await Promise.all([
          axios.get("/casts", { headers }),
          axios.get("/photos", { headers }),
          axios.get("/videos", { headers }),
        ]);

        setCastInformation(castRes.data);
        setPhotoInformation(photoRes.data);
        setVideoInformation(videoRes.data);
      } catch (error) {
        console.error("Error fetching additional data:", error);
      }
    };

    fetchData();
  }, [movie, accessToken]);


  const renderVideo = (video) => {
    return video.url.includes("youtube") ? (
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${video.videoKey}`}
        title={video.name}
        frameBorder="0"
        allowFullScreen
        className="video-iframe"
      ></iframe>
    ) : (
      <video controls width="100%" height="auto">
        <source src={video.url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  };

  return (
    <>
      {movie && (
        <div className="movie-details">
          { }
          <div className="movie-poster">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`}
              alt={`${movie.title} Poster`}
            />
          </div>

          { }
          <div className="movie-info">
            <div
              className="banner"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdropPath})`,
              }}
            >
              <h1>{movie.title}</h1>
            </div>

            <h3>{movie.overview}</h3>

            { }
            <div className="movie-meta">
              {movie.popularity && <h4>Popularity: {movie.popularity}</h4>}
              {movie.releaseDate && (
                <h4>Release Date: {new Date(movie.releaseDate).toLocaleDateString()}</h4>
              )}
              {movie.voteAverage && <h4>Vote Average: {movie.voteAverage}</h4>}
              <h4>{movie.isFeatured ? "Featured Movie" : "Not Featured"}</h4>
            </div>

            { }
            {castInformation.length > 0 ? (
              <section>
                <h2>Cast & Crew</h2>
                <ul>
                  {castInformation
                    .filter((cast) => cast.movieId === parseInt(tmdbId))
                    .map((cast) => (
                      <li key={cast.id}>
                        <img src={cast.url} alt={cast.name} />
                        <span>
                          {cast.name} as {cast.characterName}
                        </span>
                      </li>
                    ))}
                </ul>
              </section>
            ) : (
              <p>No cast information available.</p>
            )}

            { }
            {videoInformation.length > 0 ? (
              <section>
                <h2>Videos</h2>
                {videoInformation
                  .filter((video) => video.movieId === parseInt(tmdbId))
                  .map((video) => (
                    <div key={video.id}>
                      <h3>{video.name}</h3>
                      {renderVideo(video)}
                    </div>
                  ))}
              </section>
            ) : (
              <p>No videos available.</p>
            )}

            { }
            {photoInformation.length > 0 ? (
              <section>
                <h2>Photos</h2>
                <div className="photos-container">
                  {photoInformation
                    .filter((photo) => photo.movieId === parseInt(tmdbId))
                    .map((photo) => (
                      <img key={photo.id} src={photo.url} alt="Movie Scene" />
                    ))}
                </div>
              </section>
            ) : (
              <p>No photos available.</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default View;
