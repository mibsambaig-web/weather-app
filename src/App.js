import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('Karachi');
  const [search, setSearch] = useState('');
  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c152f4477abef94f48846109aad5e5f1&units=metric`)
    .then(res => res.json())
    .then(data => setWeather(data));
  }, [city]);

  return (
    <div className='app'>
      <h1>Weather App</h1>
      <input
      type="text"
      placeholder="Search City"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => setCity(search)}>Search</button>
      { weather && weather.main && (
        <div>
          <h2>{weather.name}</h2>
          <h3>{weather.main.temp}°C</h3>
          <p>{weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
          </div>
      )}
    </div>
  );
}

export default App;