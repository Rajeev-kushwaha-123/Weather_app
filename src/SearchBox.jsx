import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import './SearchBox.css';
import { useState } from 'react';
export default function SearchBox({updateInfo}) {
  let [city,setCity]=useState("");
  let [error ,setError]=useState(false);

  const API_URL="https://api.openweathermap.org/data/2.5/weather";
  const API_KEY="c1f5fb6c6bf170e03a67259dc59fd66f";
  
  let getWeatherInfo = async () => {
    try {
          let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
          let jsonResponse= await response.json()
          console.log(jsonResponse);
          let result ={
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
    }catch (err) {
      throw err;
     }
  }

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try{
      event.preventDefault(); // Prevent the default form submission behavior
    console.log(`Searching for weather in ${city}`);
    setCity(""); // Clear the input field after submission
    let newInfo=await getWeatherInfo(city); // Call the function to fetch weather info
    updateInfo(newInfo) 
    } catch (err) {
      setError(true)
    }
  }
  return (
    <div className="search-box">
      <h1>Search for the weather</h1>
      <form onSubmit={handleSubmit}>

       <TextField id="city" label="City name" variant="outlined"
        required value={city} onChange={handleChange}/> 

       <br></br>
       <br></br>

       <Button variant="contained" type="submit" >
        Search
      </Button>
      {error && <p style={{color: 'red'}}>No such place found. Please try again.</p>}
      </form>
    </div>
  );
}
