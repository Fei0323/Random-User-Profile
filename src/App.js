import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [profile, setProfile] = useState(null);
  const fetchProfile = () => {
    axios.get('http://randomuser.me/api/')
      .then((response) => {
        setProfile(response.data.results[0]);
      })
      .catch((error) => {
        console.error("There was an error fetching the profile!", error);
      });
  };
  useEffect(() => {
    fetchProfile();
  }, []);
  return (
    <div className="App">
      <h1>Random User Profile</h1>
      <button onClick={fetchProfile}>Get New Profile</button>
      {profile && (
        <div className="profile">
          <img src={profile.picture.large} alt="User" />
          <h2>{profile.name.first} {profile.name.last}</h2>
          <p>{profile.email}</p>
          <p>{profile.phone}</p>
          <p>{profile.location.city}, {profile.location.country}</p>
        </div>
      )}
    </div>
  );
}

export default App;
