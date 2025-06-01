import './InfoBox.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoBox({info}) {
    const INIT_URL="https://images.unsplash.com/photo-1722858344552-7acf888a7046?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    return (
        <div className="info-box">
            <div className="card"> 
                <Card sx={{ maxWidth: 400 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={INIT_URL}
                    title="Dusty Weather"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}
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