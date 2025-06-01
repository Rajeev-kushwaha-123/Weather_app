import React from 'react';
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "c1f5fb6c6bf170e03a67259dc59fd66f";
  
  let getWeatherInfo = async () => {
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse = await response.json();
    console.log(jsonResponse);
    let result = {
      city: jsonResponse.name,
      temperature: jsonResponse.main.temp,
      humidity: jsonResponse.main.humidity,
      temp_min: jsonResponse.main.temp_min,
      temp_max: jsonResponse.main.temp_max,
      feel_like: jsonResponse.main.feels_like,
      description: jsonResponse.weather[0].description,
    };
    console.log(result);
    return result;
  }

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(`Searching for weather in ${city}`);
      setCity("");
      let newInfo = await getWeatherInfo(city);
      updateInfo(newInfo);
      setError(false);
    } catch (err) {
      setError(true);
    }
  }

  return (
    <div className="search-box">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={handleChange}
          required
        />
        <button type="submit">Search</button>
        {error && <p className="error-message">No such place found. Please try again.</p>}
      </form>
    </div>
  );
}
