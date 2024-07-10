import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import "./WeatherApp.css";
import { useState } from "react";
import React from 'react'
export default function WeatherApp() {
  let [weatherInfo, setweatherInfo] = useState({
    city: "Mumbai",
    humedity: 38.73,
    temp: 31.73,
    tempMax: 32.05,
    tempMin: 31.73,
    weather: "mist",
    feelsLike: 79,
  });
  let updateInfo = (newInfo)=>{
    setweatherInfo(newInfo);
  }
  return (
    <div>
      <h1>Weather Forcasting By Prince</h1>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
  );
}
