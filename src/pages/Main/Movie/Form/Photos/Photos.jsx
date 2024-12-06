import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Photos.css';

function Photos() {
  const { tmdbId } = useParams();
  const [photoInfo, setPhotoInfo] = useState([]);
  const [formState, setFormState] = useState({ mode: "base", photo: {} });
  const [data, setData] = useState({
    url: '',
    description: '',
  });
  const [tmdbPhotos, setTmdbPhotos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const accessToken = localStorage.getItem("accessToken");
  const user = JSON.parse(localStorage.getItem("user"));
  const apiKey = "67e39655ab5c0b2be23473d483fb4af4";

  useEffect(() => {
    axios.get('/photos', {
      headers: { Authorization: `Bearer ${accessToken}` },
    }).then((response) => {
      setPhotoInfo(response.data);
    });
  }, [accessToken]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    if (formState.mode === "add") {
      setData((prev) => ({ ...prev, [name]: value }));
    } else {
      setFormState((prev) => ({
        ...prev,
        photo: { ...prev.photo, [name]: value },
      }));
    }
  };

  const handleSave = () => {
    const formData = new FormData();
    formData.append('userId', user.userId);
    formData.append('movieId', tmdbId);
    Object.keys(data).forEach((key) => formData.append(key, data[key]));

    axios.post('/photos', formData, {
      headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${accessToken}` },
    }).then((response) => {
      setPhotoInfo([...photoInfo, response.data]);
      setFormState({ mode: "base", photo: {} });
    });
  };

  const handleUpdate = () => {
    const updatedPhoto = formState.photo;
    axios.patch(`/photos/${updatedPhoto.id}`, updatedPhoto, {
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${accessToken}` },
    }).then((response) => {
      setPhotoInfo((prev) => prev.map(photo => photo.id === updatedPhoto.id ? response.data : photo));
      setFormState({ mode: "base", photo: {} });
    });
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this photo?')) {
      axios.delete(`/photos/${id}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      }).then(() => {
        setPhotoInfo(photoInfo.filter(photo => photo.id !== id));
      });
    }
  };

  const searchMoviePhotos = () => {
    if (searchQuery.trim() === "") return; // Prevent empty searches
    axios
      .get(`https://api.themoviedb.org/3/movie/${tmdbId}/images`, {
        params: { api_key: apiKey },
      })
      .then((response) => {
        const { backdrops } = response.data;
        const photos = backdrops
          .filter(photo => photo.file_path.includes(searchQuery)) // Filter photos based on search query
          .map((photo) => ({
            url: `https://image.tmdb.org/t/p/w500${photo.file_path}`,
            description: "Photo from TMDB",
          }));
        setTmdbPhotos(photos);
      });
  };

  const importPhoto = (photo) => {
    const formData = new FormData();
    formData.append('userId', user.userId);
    formData.append('movieId', tmdbId);
    formData.append('url', photo.url);
    formData.append('description', photo.description);

    axios.post('/photos', formData, {
      headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${accessToken}` },
    }).then((response) => {
      setPhotoInfo([...photoInfo, response.data]);
    });
  };

  const renderForm = () => {
    const currentPhoto = formState.mode === "update" ? formState.photo : data;
    return (
      <div className="photo-form-container">
        <form className="photo-form">
          <label className="photo-form-label">
            Photo URL
            <input
              type="text"
              name="url"
              value={currentPhoto.url}
              onChange={handleOnChange}
              className="photo-form-input"
            />
          </label>
          <label className="photo-form-label">
            Description
            <input
              type="text"
              name="description"
              value={currentPhoto.description}
              onChange={handleOnChange}
              className="photo-form-input"
            />
          </label>
        </form>
        <button className="photo-form-button" onClick={formState.mode === "add" ? handleSave : handleUpdate}>
          {formState.mode === "add" ? "Save" : "Update"}
        </button>
      </div>
    );
  };

  return (
    <div className="photos-container">
      <button className="toggle-photo-form-button" onClick={() => setFormState({ mode: formState.mode === "base" ? "add" : "base", photo: {} })}>
        {formState.mode === "base" ? "Add Photo" : "Cancel"}
      </button>
      <button className="import-photo-button" onClick={searchMoviePhotos}>Import Photos</button>

      {/* Search input field for searching specific TMDB photos */}
      <div className="search-container">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
          placeholder="Search for a photo..."
        />
        <button className="search-button" onClick={searchMoviePhotos}>Search</button>
      </div>

      {(formState.mode === "add" || formState.mode === "update") && renderForm()}

      <h3 className="tmdb-photos-title">Photos from TMDB:</h3>
      <div className="tmdb-photos-container">
        {tmdbPhotos.map((photo, index) => (
          <div key={index} className="tmdb-photo-item">
            <img className="tmdb-photo" src={photo.url} alt={photo.description} />
            <button className="import-photo-button" onClick={() => importPhoto(photo)}>Import</button>
          </div>
        ))}
      </div>

      <h3 className="added-photos-title">Added Photos:</h3>
      <div className="added-photos-container">
        {photoInfo
          .filter(photo => photo.movieId === parseInt(tmdbId))
          .map((photo) => (
            <div key={photo.id} className="added-photo-item">
              <img className="added-photo" src={photo.url} alt={photo.description} />
              <p className="photo-description">{photo.description}</p>
              <button className="edit-photo-button" onClick={() => setFormState({ mode: "update", photo })}>Edit</button>
              <button className="delete-photo-button" onClick={() => handleDelete(photo.id)}>Delete</button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Photos;
