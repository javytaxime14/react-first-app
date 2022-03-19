import React, { useState } from "react";
import axios from "axios";
import { RotatingLines } from  'react-loader-spinner';

export default function Search() {
  const [city, setCity] = useState(" ");
  const [load, setLoad] = useState(false);
  const [weather, setWeather] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "b60a88cedc4311c68472f2500a9bfa39";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayTemperature);
  }

  function displayTemperature(response) {
    setLoad(true);
    setWeather({
      city: response.data.name,
      country: response.data.sys.country,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      temp: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].main,
      wind: Math.round(response.data.wind.speed)
    });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        onChange={updateCity}
        placeholder="Search for a location"
        className="form-control w-50 offset-3"
      />
      <input type="submit" value="Let's search!" className="searchButton" />
    </form>
  );

  if (load) {
    return (
      <div className="Temperature">
        {form}
        <div className="Temperature-info">
            <div className="Temperature-info-left mt-5">
                <h2>{weather.city}, {weather.country}</h2>
                <img src={weather.icon} alt={weather.description} />
            </div>
        </div>    
        <ul>
          <li>Temperature: {weather.temp} °C</li>
          <li>Humidity: {weather.humidity} %</li>
          <li>Description: {weather.description}</li>
          <li>Wind: {weather.wind} km/h</li>
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        {form}
        <p className="mt-4 mb-5">Enter a city to get information </p>
        <RotatingLines width="100" strokeColor="#FF5733" strokeWidth="1" timein={3000} />
      </div>
    );
  }
}
