import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';

export default function WeatherApp() {
    const [WeatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        description: "clear sky",
        feel_like: 44.04,
        humidity: 20,
        temp_max: 43.08,
        temp_min: 43.08,
        temperature: 43.08
    });
    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign: 'center'}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={WeatherInfo}/>
        </div>
    )
} 