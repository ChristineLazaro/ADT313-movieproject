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

  const accessToken = localStorage.getItem('accessToken');
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    axios.get(`/videos`, {
      headers: { Authorization: `Bearer ${accessToken}` }
    }).then(response => {
      setVideos(response.data);
      console.log(response.data)
    });
  }, [accessToken]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    if (formState.mode === 'add') {
      setData((prev) => ({ ...prev, [name]: value }));
    } else {
      setFormState((prev) => ({
        ...prev,
        video: { ...prev.video, [name]: value }
      }));
    }
  };

  const handleSave = () => {
    const formData = new FormData();
    formData.append('userId', user.userId);
    formData.append('movieId', tmdbId);
    Object.keys(data).forEach((key) => formData.append(key, data[key]));

    axios.post('/videos', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${accessToken}`
      }
    }).then(response => {
      setVideos([...videos, response.data]);
      setFormState({ mode: 'base', video: {} });
    });
  };

  const handleUpdate = () => {
    const updatedVideo = formState.video;
    axios.patch(`/videos/${updatedVideo.id}`, updatedVideo, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`
      }
    }).then(response => {
      setVideos((prev) => prev.map(video => video.id === updatedVideo.id ? response.data : video));
      setFormState({ mode: 'base', video: {} });
    });
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this video?')) {
      axios.delete(`/videos/${id}`, {
        headers: { Authorization: `Bearer ${accessToken}` }
      }).then(() => {
        setVideos(videos.filter(video => video.id !== id));
      });
    }
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
      <button onClick={() => setFormState({ mode: formState.mode === 'base' ? 'add' : 'base', video: {} })}>
        {formState.mode === 'base' ? 'Add Video' : 'Cancel'}
      </button>
      {(formState.mode === 'add' || formState.mode === 'update') && renderForm()}
      {videos
        .filter((video) => video.movieId === parseInt(tmdbId))
        .map((video) => (
          <div key={video.id}>
            <h2>{video.name}</h2>
            <p>{video.site}</p>
            <p>{video.videoType}</p>
  
            {video.url.includes("youtube") && (
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
  )}

  

export default Videos
