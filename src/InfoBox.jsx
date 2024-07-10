import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import "./InfoBox.css";
export default function InfoBox({ info }) {
  const Hot =
    "https://plus.unsplash.com/premium_photo-1688431299328-1d32433ac917?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const Cold =
    "https://images.unsplash.com/photo-1564314968303-86c5df2b9a4c?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const Rainy =
    "https://plus.unsplash.com/premium_photo-1674684222755-98a35d94cdfa?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="infobox">
      <h3>Weather info - {info.weather}</h3>
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={ info.humedity > 80 ? Rainy : info.temp > 15 ? Hot : Cold }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city }&nbsp;
              {
                info.humedity > 60 ?   <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/> : <SevereColdIcon/>
              }
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <div>Tempreture - {info.temp}&deg;C</div>
              <div>Humedity - {info.humedity}</div>
              <p>Min-Temp - {info.tempMin}&deg;C</p>
              <p>Max-Temp - {info.tempMax}&deg;C</p>
              <p>
                {" "}
                The Weather can be describe as{" "}
                <i>
                  <b> {info.weather} </b>{" "}
                </i>
                and Feels Like - {info.feelsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
