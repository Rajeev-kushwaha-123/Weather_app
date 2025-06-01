import './InfoBox.css';

export default function InfoBox({info}) {
    let COLD_URL = "https://plus.unsplash.com/premium_photo-1671127303935-6042d1d8fcd8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let HOT_URL = "https://images.unsplash.com/photo-1610557013547-dc7a52d44709?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let RAIN_URL = "https://images.unsplash.com/photo-1610741083757-1ae88e1a17f7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const getWeatherIcon = () => {
        if (info.humidity > 80) return "🌧️";
        if (info.temperature > 15) return "☀️";
        return "❄️";
    };

    return (
        <div className="info-box">
            <h3>{info.city} {getWeatherIcon()}</h3>
            <div className="weather-info">
                <p className="temperature">{info.temperature}°C</p>
                <p>Description: {info.description}</p>
                <p>Max Temp: {info.temp_max}°C</p>
                <p>Min Temp: {info.temp_min}°C</p>
                <p>Feels Like: {info.feel_like}°C</p>
                <p>Humidity: {info.humidity}%</p>
            </div>
            <div 
                className="weather-background"
                style={{
                    backgroundImage: `url(${info.humidity > 80 ? RAIN_URL : info.temperature > 15 ? HOT_URL : COLD_URL})`
                }}
            />
        </div>
    );
}