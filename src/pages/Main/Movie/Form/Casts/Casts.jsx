import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Casts.css';

function Casts() {
  const { tmdbId } = useParams();
  const [castInfo, setCastInfo] = useState([]);
  const [formState, setFormState] = useState({ mode: "base", cast: {} });
  const [data, setData] = useState({
    url: '',
    name: '',
    characterName: '',
    // description: ''
  });

  const accessToken = localStorage.getItem("accessToken");
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    axios.get('/casts', {
      headers: { Authorization: `Bearer ${accessToken}` }
    }).then((response) => {
      setCastInfo(response.data);
    });
  }, [accessToken]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    if (formState.mode === "add") {
      setData((prev) => ({ ...prev, [name]: value }));
    } else {
      setFormState((prev) => ({
        ...prev,
        cast: { ...prev.cast, [name]: value },
      }));
    }
  };

  const handleSave = () => {
    const formData = new FormData();
    formData.append('userId', user.userId);
    formData.append('movieId', tmdbId);
    Object.keys(data).forEach((key) => formData.append(key, data[key]));

    axios.post('/casts', formData, {
      headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${accessToken}` }
    }).then((response) => {
      console.log(response.data);
      setCastInfo([...castInfo, response.data]); 
      setFormState({ mode: "base", cast: {} });
    });
  };

  const handleUpdate = () => {
    const updatedCast = formState.cast;
    axios.patch(`/casts/${updatedCast.id}`, updatedCast, {
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${accessToken}` }
    }).then((response) => {
      console.log(response.data);
      setCastInfo((prev) => prev.map(cast => cast.id === updatedCast.id ? response.data : cast));
      setFormState({ mode: "base", cast: {} });
    });
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this cast?')) {
      axios.delete(`/casts/${id}`, {
        headers: { Authorization: `Bearer ${accessToken}` }
      }).then(() => {
        console.log('Database Updated');
        setCastInfo(castInfo.filter(cast => cast.id !== id)); 
      });
    }
  };

  const renderForm = () => {
    const currentCast = formState.mode === "update" ? formState.cast : data;
    return (
      <div>
        <form>
          <label>
            Cast Profile
            <input className="castImg" type="text" name="url" value={currentCast.url} onChange={handleOnChange} />
          </label>
          <label>
            Cast Name
            <input className="castName" type="text" name="name" value={currentCast.name} onChange={handleOnChange} />
          </label>
          <label>
            Character Name
            <input className="castCharName" type="text" name="characterName" value={currentCast.characterName} onChange={handleOnChange} />
          </label>
          {/* <label>
            Description
            <input className="castDesc" type="text" name="description" value={currentCast.description} onChange={handleOnChange} />
          </label> */}
        </form>
        <button onClick={formState.mode === "add" ? handleSave : handleUpdate}>
          {formState.mode === "add" ? "Save" : "Update"}
        </button>
      </div>
    );
  };

  return (
    <div>
      <button className="button-Add" onClick={() => setFormState({ mode: formState.mode === "base" ? "add" : "base", cast: {} })}>
        {formState.mode === "base" ? "Add Cast" : "Cancel"}
      </button>
      {(formState.mode === "add" || formState.mode === "update") && renderForm()}

      {castInfo.filter(cast => cast.movieId === parseInt(tmdbId)).map((cast) => (
        <div key={cast.id}>
          <img src={cast.url} alt={cast.name} />
          <h1>{cast.name}</h1>
          <h3>{cast.characterName}</h3>
          <button onClick={() => setFormState({ mode: "update", cast })}>Edit</button>
          <button onClick={() => handleDelete(cast.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Casts;
