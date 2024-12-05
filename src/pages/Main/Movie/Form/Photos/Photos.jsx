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
    axios
      .get(`https://api.themoviedb.org/3/movie/${tmdbId}/images`, {
        params: { api_key: apiKey },
      })
      .then((response) => {
        const { backdrops } = response.data;
        const photos = backdrops.map((photo) => ({
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
      <div>
        <form>
          <label>
            Photo URL
            <input type="text" name="url" value={currentPhoto.url} onChange={handleOnChange} />
          </label>
          <label>
            Description
            <input type="text" name="description" value={currentPhoto.description} onChange={handleOnChange} />
          </label>
        </form>
        <button onClick={formState.mode === "add" ? handleSave : handleUpdate}>
          {formState.mode === "add" ? "Save" : "Update"}
        </button>
      </div>
    );
  };

  return (
    <div>
      <button onClick={() => setFormState({ mode: formState.mode === "base" ? "add" : "base", photo: {} })}>
        {formState.mode === "base" ? "Add Photo" : "Cancel"}
      </button>
      <button onClick={searchMoviePhotos}>Import Photos</button>

      {(formState.mode === "add" || formState.mode === "update") && renderForm()}

      <h3>Photos from TMDB:</h3>
      <div className="tmdb-photos">
        {tmdbPhotos.map((photo, index) => (
          <div key={index}>
            <img src={photo.url} alt={photo.description} />
            <button onClick={() => importPhoto(photo)}>Import</button>
          </div>
        ))}
      </div>

      <h3>Added Photos:</h3>
      {photoInfo
        .filter(photo => photo.movieId === parseInt(tmdbId))
        .map((photo) => (
          <div key={photo.id}>
            <img src={photo.url} alt={photo.description} />
            <p>{photo.description}</p>
            <button onClick={() => setFormState({ mode: "update", photo })}>Edit</button>
            <button onClick={() => handleDelete(photo.id)}>Delete</button>
          </div>
        ))}
    </div>
  );
}

export default Photos;
