import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Photos.css'; // Import your styles for this component

function Photos() {
  const { tmdbId } = useParams();
  const [photoInfo, setPhotoInfo] = useState([]);
  const [formState, setFormState] = useState({ mode: "base", photo: {} });
  const [data, setData] = useState({
    url: '',
    description: '',
  });

  const accessToken = localStorage.getItem("accessToken");
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    axios.get('/photos', {
      headers: { Authorization: `Bearer ${accessToken}` }
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
      headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${accessToken}` }
    }).then((response) => {
      console.log(response.data);
      setPhotoInfo([...photoInfo, response.data]); 
      setFormState({ mode: "base", photo: {} });
    });
  };

  const handleUpdate = () => {
    const updatedPhoto = formState.photo;
    axios.patch(`/photos/${updatedPhoto.id}`, updatedPhoto, {
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${accessToken}` }
    }).then((response) => {
      console.log(response.data);
      setPhotoInfo((prev) => prev.map(photo => photo.id === updatedPhoto.id ? response.data : photo));
      setFormState({ mode: "base", photo: {} });
    });
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this photo?')) {
      axios.delete(`/photos/${id}`, {
        headers: { Authorization: `Bearer ${accessToken}` }
      }).then(() => {
        console.log('Database Updated');
        setPhotoInfo(photoInfo.filter(photo => photo.id !== id)); 
      });
    }
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
      <button className="button-Add" onClick={() => setFormState({ mode: formState.mode === "base" ? "add" : "base", photo: {} })}>
        {formState.mode === "base" ? "Add Photo" : "Cancel"}
      </button>
      {(formState.mode === "add" || formState.mode === "update") && renderForm()}

      {photoInfo.filter(photo => photo.movieId === parseInt(tmdbId)).map((photo) => (
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
