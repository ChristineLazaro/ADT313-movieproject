import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Videos.css';

function Videos() {
  const { tmdbId } = useParams();
  const [videos, setVideos] = useState([]);
  const [formState, setFormState] = useState({ mode: 'base', video: {} });
  const [data, setData] = useState({
    url: '',
    name: '',
    site: '',
    videoKey: '',
    videoType: '',
    official: 0,
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [tmdbVideos, setTmdbVideos] = useState([]);

  const accessToken = localStorage.getItem('accessToken');
  const user = JSON.parse(localStorage.getItem('user'));
  const apiKey = '67e39655ab5c0b2be23473d483fb4af4';

  useEffect(() => {
    axios
      .get('/videos', {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((response) => {
        setVideos(response.data);
      });
  }, [accessToken]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    if (formState.mode === 'add') {
      setData((prev) => ({ ...prev, [name]: value }));
    } else {
      setFormState((prev) => ({
        ...prev,
        video: { ...prev.video, [name]: value },
      }));
    }
  };

  const handleSave = () => {
    const formData = new FormData();
    formData.append('userId', user.userId);
    formData.append('movieId', tmdbId);
    Object.keys(data).forEach((key) => formData.append(key, data[key]));

    axios
      .post('/videos', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        setVideos([...videos, response.data]);
        setFormState({ mode: 'base', video: {} });
      });
  };

  const handleUpdate = () => {
    const updatedVideo = formState.video;
    axios
      .patch(`/videos/${updatedVideo.id}`, updatedVideo, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        setVideos((prev) =>
          prev.map((video) => (video.id === updatedVideo.id ? response.data : video))
        );
        setFormState({ mode: 'base', video: {} });
      });
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this video?')) {
      axios
        .delete(`/videos/${id}`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        })
        .then(() => {
          setVideos(videos.filter((video) => video.id !== id));
        });
    }
  };

  const handleSearchMovie = () => {
    axios
      .get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}`)
      .then((response) => {
        const movieId = response.data.results[0]?.id;
        if (movieId) fetchTmdbVideos(movieId);
      })
      .catch((error) => console.error('Error searching movie:', error));
  };

  const fetchTmdbVideos = (movieId) => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`)
      .then((response) => {
        setTmdbVideos(response.data.results);
      })
      .catch((error) => console.error('Error fetching videos from TMDB:', error));
  };

  const handleImportVideo = (video) => {
    const formData = {
      userId: user.userId,
      movieId: tmdbId,
      url: `https://www.youtube.com/watch?v=${video.key}`,
      name: video.name,
      site: video.site,
      videoKey: video.key,
      videoType: video.type,
      official: video.official ? 1 : 0,
    };

    axios
      .post('/videos', formData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        setVideos([...videos, response.data]);
        alert('Video imported successfully!');
      })
      .catch((error) => console.error('Error importing video:', error));
  };

  const renderForm = () => {
    const currentVideo = formState.mode === 'update' ? formState.video : data;
    return (
      <div>
        <form>
          <label>
            Video URL
            <input type="text" name="url" value={currentVideo.url} onChange={handleOnChange} />
          </label>
          <label>
            Video Name
            <input type="text" name="name" value={currentVideo.name} onChange={handleOnChange} />
          </label>
          <label>
            Site
            <input type="text" name="site" value={currentVideo.site} onChange={handleOnChange} />
          </label>
          <label>
            Video Key
            <input type="text" name="videoKey" value={currentVideo.videoKey} onChange={handleOnChange} />
          </label>
          <label>
            Video Type
            <input type="text" name="videoType" value={currentVideo.videoType} onChange={handleOnChange} />
          </label>
          <label>
            Official
            <select name="official" value={currentVideo.official} onChange={handleOnChange}>
              <option value={1}>Yes</option>
              <option value={0}>No</option>
            </select>
          </label>
        </form>
        <button onClick={formState.mode === 'add' ? handleSave : handleUpdate}>
          {formState.mode === 'add' ? 'Save' : 'Update'}
        </button>
      </div>
    );
  };

  return (
    <div>
      <button
        onClick={() => setFormState({ mode: formState.mode === 'base' ? 'add' : 'base', video: {} })}
      >
        {formState.mode === 'base' ? 'Add Video' : 'Cancel'}
      </button>
      <button onClick={() => setFormState({ mode: 'import', video: {} })}>
        Import Videos
      </button>
      {(formState.mode === 'add' || formState.mode === 'update') && renderForm()}

      {formState.mode === 'import' && (
        <div>
          <input
            type="text"
            placeholder="Search Movie"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearchMovie}>Search</button>
          <div className="tmdb-videos">
            {tmdbVideos.map((video) => (
              <div key={video.id} className="tmdb-video-item">
                <h4>{video.name}</h4>
                <button onClick={() => handleImportVideo(video)}>Import</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {videos
        .filter((video) => video.movieId === parseInt(tmdbId))
        .map((video) => (
          <div key={video.id}>
            <h2>{video.name}</h2>
            <p>{video.site}</p>
            <p>{video.videoType}</p>
            {video.url.includes('youtube') && (
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${video.videoKey}`}
                title={video.name}
                frameBorder="0"
                allowFullScreen
                className="video-iframe"
              ></iframe>
            )}
            <button onClick={() => setFormState({ mode: 'update', video })}>Edit</button>
            <button onClick={() => handleDelete(video.id)}>Delete</button>
          </div>
        ))}
    </div>
  );
}

export default Videos;
