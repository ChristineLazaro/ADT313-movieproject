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
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [importedCast, setImportedCast] = useState([]);
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

  const handleImportCast = async () => {
    if (!searchQuery) {
      alert("Please enter a movie name.");
      return;
    }

    try {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=67e39655ab5c0b2be23473d483fb4af4&query=${searchQuery}`);
      const movie = response.data.results[0]; 
      if (!movie) {
        alert("No movie found with that name.");
        return;
      }

      const castResponse = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=67e39655ab5c0b2be23473d483fb4af4`);
      setImportedCast(castResponse.data.cast); 
    } catch (error) {
      console.error("Error fetching cast data from TMDb:", error);
      alert("Error fetching cast data.");
    }
  };

  const handleAddImportedCast = (cast) => {
    const formData = new FormData();
    formData.append('userId', user.userId);
    formData.append('movieId', tmdbId);
    formData.append('url', `https://image.tmdb.org/t/p/w200${cast.profile_path}`);
    formData.append('name', cast.name);
    formData.append('characterName', cast.character);

    axios.post('/casts', formData, {
      headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${accessToken}` }
    }).then((response) => {
      console.log(response.data);
      setCastInfo([...castInfo, response.data]);
      setImportedCast([]); 
    });
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
      <button className="button-Import" onClick={handleImportCast}>
        Import Cast from TMDb
      </button>
      <input
        type="text"
        placeholder="Search for a movie"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {(formState.mode === "add" || formState.mode === "update") && renderForm()}

      {importedCast.length > 0 && (
        <div>
          <h2>Imported Cast:</h2>
          <div className="imported-cast-container">
            {importedCast.map((cast) => (
              <div key={cast.cast_id} className="imported-cast-card">
                <img src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`} alt={cast.name} className="imported-cast-img" />
                <h3>{cast.name}</h3>
                <h4>{cast.character}</h4>
                <button onClick={() => handleAddImportedCast(cast)}>
                  Add to My Cast
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="casts-container">
        {castInfo.filter(cast => cast.movieId === parseInt(tmdbId)).map((cast) => (
          <div key={cast.id} className="cast-card">
            <img src={cast.url} alt={cast.name} className="cast-card-img" />
            <h1 className="cast-card-name">{cast.name}</h1>
            <h3 className="cast-card-character">{cast.characterName}</h3>
            <button className="cast-card-edit-btn" onClick={() => setFormState({ mode: "update", cast })}>Edit</button>
            <button className="cast-card-delete-btn" onClick={() => handleDelete(cast.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Casts;
