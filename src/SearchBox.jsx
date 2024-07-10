import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import './SeachBox.css';

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);
  const API_URL = import.meta.env.VITE_API_URL;
  const API_KEY = import.meta.env.VITE_API_KEY;

  const getWeather = async () => {
    try {
      const response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      const result = {
        city: city,
        temp: data.main.temp,
        tempMin: data.main.temp_min,
        feelsLike: data.main.feels_like,
        tempMax: data.main.temp_max,
        humidity: data.main.humidity,
        weather: data.weather[0].description,
      };
      return result;
    } catch (error) {
      throw error;
    }
  };

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newInfo = await getWeather();
      updateInfo(newInfo);
      setCity("");
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="SearchBox">
      <p>Search weather of your city</p>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="standard"
          required
          value={city}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
      {error && <p>No such location exists in our survey</p>}
    </div>
  );
}
