import './InfoBox.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({info}) {
    let COLD_URL = "https://plus.unsplash.com/premium_photo-1671127303935-6042d1d8fcd8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let HOT_URL = "https://images.unsplash.com/photo-1610557013547-dc7a52d44709?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let RAIN_URL = "https://images.unsplash.com/photo-1610741083757-1ae88e1a17f7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <div className="info-box">
            <div className="card"> 
                <Card sx={{ maxWidth: 400 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity>80 ? RAIN_URL :info.temperature > 15 ? HOT_URL:COLD_URL}
                    title="Dusty Weather"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                        {info.humidity>80 ? <ThunderstormIcon/> :info.temperature > 15 ? <SunnyIcon/>:<AcUnitIcon/>}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Description: {info.description}<br />
                    Temperature: {info.temperature}°C<br />
                    Max Temp: {info.temp_max}°C<br />
                    Min Temp: {info.temp_min}°C<br />
                    Feels Like: {info.feel_like}°C<br />
                    Humidity: {info.humidity}%<br />
                    <br />
                    </Typography>
                </CardContent> 
               </Card>
            </div>   
        </div>
    );
}